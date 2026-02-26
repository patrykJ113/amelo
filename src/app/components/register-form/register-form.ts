import {Component, EventEmitter, Output} from '@angular/core';
import {DividerWithText} from '@components/divider-with-text/divider-with-text';
import {OauthButtonGroup} from '@components/oauth-button-group/oauth-button-group';
import {VerticalSpacing} from '@components/positioning/vertical-spacing/vertical-spacing';
import {AppInput} from '@components/app/app-input/app-input';
import {AppButton} from '@components/app/app-button/app-button';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RevealUnderline} from '@components/reveal-underline/reveal-underline';
import {AuthService} from '@services/auth.service';
import {getFormControl} from '@helpers/get-form-control';
import {PasswordHints} from '@components/password-hints/password-hints';
import {passwordValidator} from '@validators/password';

@Component({
  selector: 'register-form',
  imports: [
    DividerWithText,
    OauthButtonGroup,
    VerticalSpacing,
    AppInput,
    AppButton,
    RevealUnderline,
    PasswordHints
  ],
  templateUrl: './register-form.html',
  styleUrl: './register-form.css'
})
export class RegisterForm {
  @Output() goToLogIn = new EventEmitter()
  firstSubmit: boolean = false
  form: FormGroup

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordValidator]]
    })
  }

  onSignInEnterKeyDow() {
    this.goToLogIn.emit()
  }

  getControl(controlName: string) {
    return getFormControl(this.form, controlName)
  }

  register() {
    this.firstSubmit = true
    if(this.form.invalid) this.form.markAllAsTouched()
  }
}
