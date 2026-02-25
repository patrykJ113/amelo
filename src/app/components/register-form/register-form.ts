import {Component, EventEmitter, Output} from '@angular/core';
import {DividerWithText} from '@components/divider-with-text/divider-with-text';
import {OauthButtonGroup} from '@components/oauth-button-group/oauth-button-group';
import {VerticalSpacing} from '@components/positioning/vertical-spacing/vertical-spacing';
import {AppInput} from '@components/app/app-input/app-input';
import {AppButton} from '@components/app/app-button/app-button';
import {FormControl} from '@angular/forms';
import {RevealUnderline} from '@components/reveal-underline/reveal-underline';
import {AuthService} from '@services/auth.service';
import {getFormControl} from '@helpers/get-form-control';

@Component({
  selector: 'register-form',
  imports: [
    DividerWithText,
    OauthButtonGroup,
    VerticalSpacing,
    AppInput,
    AppButton,
    RevealUnderline
  ],
  templateUrl: './register-form.html',
  styleUrl: './register-form.css'
})
export class RegisterForm {
  control = new FormControl()
  @Output() goToLogIn = new EventEmitter()

  onSignInEnterKeyDow() {
    this.goToLogIn.emit()
  }

  getControl(controlName: string) {
    return getFormControl(this.form, controlName)
  }

  register() {

  }
}
