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
    try {
      const { name, email, password } = this.registerData;

      // check sui dati inseriti dall utente per segnalare eventuali campi obbligatori non inseriti
      // check su email tramite regex

      if (!name) throw new Error('Il campo nome è obbligatorio');

      // controllo anche per mail e pass
      // dopo che tutti i controlli sono andati a buon fine, possiamo chiamare il back

      // non avendo un backend, generiamo un id random
      const randomId = Math.round(Math.random() * 99) + 1;
      this.registerData.id = randomId;

      this.AuthSvc.register(this.registerData).subscribe({
        // segnali all utente la buona riuscita della registrazione e fai routing verso pagina di login
        next: (data) => {
          const dbUsers = this.AuthSvc.users;

          console.log(data);
          console.log(dbUsers);
          //this.router.navigate(['/auth/login']);
        },
        error: (error) =>
          console.error('Error during user registration:', error),
      });
    } catch (error: any) {
      console.error(error);
      // mostrare a front un errore tramite swal o modalina o toast notification
    }
    // this.AuthSvc.register(this.registerData).subscribe({
    //   next: (data) => this.router.navigate(['/auth/login']),
    //   error: (error) => console.error('Error during user registration:', error),
    // });
  }
}
