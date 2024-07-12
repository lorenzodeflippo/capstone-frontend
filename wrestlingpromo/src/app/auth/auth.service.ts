import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { ILoginData } from '../models/i-login-data';
import { IUser } from '../models/i-user';
import { HttpClient } from '@angular/common/http';

type AccessData = {
  token: string;
  user: IUser;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  jwtHelper: JwtHelperService = new JwtHelperService();
  authSubject = new BehaviorSubject<IUser | null>(null);
  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map((user) => Boolean(user)));

  syncIsLoggedIn: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
    this.restoreUser();
  }

  registerUrl: string = environment.registerUrl;
  loginUrl: string = environment.loginUrl;

  register(newUser: Partial<IUser>): Observable<AccessData> {
    return this.http.post<AccessData>(this.registerUrl, newUser);
  }

  login(loginData: ILoginData): Observable<AccessData> {
    return this.http.post<AccessData>(this.loginUrl, loginData).pipe(
      tap((data) => {
        this.authSubject.next(data.user);
        localStorage.setItem('accessData', JSON.stringify(data));

        this.autoLogout(data.token);
      })
    );
  }

  logout() {
    this.authSubject.next(null);
    localStorage.removeItem('accessData');
    this.router.navigate(['/']);
  }

  getAccessToken(): string {
    const userJson = localStorage.getItem('accessData');
    if (!userJson) return '';

    const accessData: AccessData = JSON.parse(userJson);
    if (this.jwtHelper.isTokenExpired(accessData.token)) return '';

    return accessData.token;
  }

  autoLogout(jwt: string) {
    const expDate = this.jwtHelper.getTokenExpirationDate(jwt) as Date;
    const expMs = expDate.getTime() - new Date().getTime();

    setTimeout(() => {
      this.logout();
    }, expMs);
  }

  restoreUser() {
    const userJson = localStorage.getItem('accessData');
    if (!userJson) return;

    const accessData: AccessData = JSON.parse(userJson);
    if (this.jwtHelper.isTokenExpired(accessData.token)) return;

    this.authSubject.next(accessData.user);
    this.autoLogout(accessData.token);
  }

  getUserId(): number | null {
    const userJson = localStorage.getItem('accessData');
    if (userJson) {
      const accessData = JSON.parse(userJson);
      return accessData.user?.id || null;
    }
    return null;
  }
  getUserInfo(): IUser | null {
    const userJson = localStorage.getItem('accessData');
    if (userJson) {
      const accessData = JSON.parse(userJson);
      return accessData;
    }
    return null;
  }

  isAuthenticated(): Observable<boolean> {
    return this.isLoggedIn$;
  }
}
