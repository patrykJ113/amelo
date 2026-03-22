import { Component } from '@angular/core';
import {NavGoToPageButton} from '@components/nav-go-to-page-button/go-to-page-button.component';
import {Logo} from '@components/logo/logo';
import {AvatarDropdown} from '@components/avatar-dropdown/avatar-dropdown';
import {AppButton} from '@components/app/app-button/app-button';
import {HorizontalSpacing} from '@components/positioning/horizontal-spacing/horizontal-spacing';
import {AuthService} from '@services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [
    NavGoToPageButton,
    Logo,
    AvatarDropdown,
    AppButton,
    HorizontalSpacing
  ],
  templateUrl: './app-nav.html',
  styleUrl: './app-nav.css'
})
export class AppNav {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  goToLogin() {
    this.router.navigate(['/auth/login'])
  }

  goToRegister() {
    this.router.navigate(['/auth/register'])
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn()
  }
}