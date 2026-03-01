import { Component } from '@angular/core';
import {NavGoToPageButton} from '@components/nav-go-to-page-button/go-to-page-button.component';
import {Logo} from '@components/logo/logo';
import {AvatarDropdown} from '@components/avatar-dropdown/avatar-dropdown';
import {AppButton} from '@components/app/app-button/app-button';
import {HorizontalSpacing} from '@components/positioning/horizontal-spacing/horizontal-spacing';
import {DialogRegistryService} from '@services/dialog-registry.service';
import {AuthService} from '@services/auth.service';
import {AuthFormService} from '@services/auth-form.service';

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
    private drs: DialogRegistryService,
    private authService: AuthService,
    private authFormService: AuthFormService
  ) {
  }

  openLoginDialog() {
    this.authFormService.set('LOG_IN')
    this.drs.get('auth-form')?.open()
  }

  openRegisterDialog() {
    this.authFormService.set('REGISTER')
    this.drs.get('auth-form')?.open()
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn()
  }
}
