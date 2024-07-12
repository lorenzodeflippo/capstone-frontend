import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { ILoginData } from '../../models/i-login-data';
import { Router } from '@angular/router';
import { IUser } from '../../models/i-user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerData: Partial<IUser> = {};

  admin: boolean = false;
  warehouse: boolean = false;

  constructor(private AuthSvc: AuthService, private router: Router) {}

  signUp() {
    this.AuthSvc.register(this.registerData).subscribe({
      next: (data) => this.router.navigate(['/auth/login']),
      error: (error) => console.error('Error during user registration:', error),
    });
  }
}
