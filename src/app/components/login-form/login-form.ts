import {Component, EventEmitter, Output} from '@angular/core';
import {AppButton} from '@components/app/app-button/app-button';
import {AppInput} from '@components/app/app-input/app-input';
import {DividerWithText} from '@components/divider-with-text/divider-with-text';
import {OauthButtonGroup} from '@components/oauth-button-group/oauth-button-group';
import {RevealUnderline} from '@components/reveal-underline/reveal-underline';
import {VerticalSpacing} from '@components/positioning/vertical-spacing/vertical-spacing';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'login-form',
  imports: [
    AppButton,
    AppInput,
    DividerWithText,
    OauthButtonGroup,
    RevealUnderline,
    VerticalSpacing
  ],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css'
})
export class LoginForm {
  @Output() goToRegister = new EventEmitter()
  @Output() goToResetPassword = new EventEmitter()
  control = new FormControl()

  onSignUpEnterKeyDow() {
    this.goToRegister.emit()
  }

  onForgotPasswordEnterKeyDow() {
    this.goToResetPassword.emit()
  }
}
