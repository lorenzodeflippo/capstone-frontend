import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { IUser } from '../models/i-user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  constructor(private authSvc: AuthService) {}

  user: IUser | undefined;

  ngOnInit() {
    this.authSvc.user$.subscribe((user) => {
      this.user = user || undefined;
    });
  }
}
