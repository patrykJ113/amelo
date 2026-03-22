import {Component} from '@angular/core';
import {LoginForm} from '@components/login-form/login-form';
import {Router} from '@angular/router';

@Component({
  selector: 'login-page',
  imports: [LoginForm],
  templateUrl: './login-page.html',
  styleUrl: './login-page.css'
})
export class LoginPage {
  constructor(private router: Router) {}

  goToRegister() {
    this.router.navigate(['/auth/register'])
  }
}