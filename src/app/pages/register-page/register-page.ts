import {Component} from '@angular/core';
import {RegisterForm} from '@components/register-form/register-form';
import {Router} from '@angular/router';
import {Logo} from '@components/logo/logo';

@Component({
  selector: 'register-page',
  imports: [RegisterForm, Logo],
  templateUrl: './register-page.html',
  styleUrl: './register-page.css'
})
export class RegisterPage {
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/auth/login'])
  }
}