import {Component, EventEmitter, Output, signal} from '@angular/core';
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
import {InputType} from '@typings/input-type';
import {Credentials} from '@typings/Credentials';
import {Alert} from '@components/alert/alert';
import {getErrorMessageForCode} from '@helpers/get-error-message-for-code';
import {Spinner} from '@components/spinner/spinner';
import {finalize} from 'rxjs';
import {SvgIconComponent} from 'angular-svg-icon';

@Component({
  selector: 'register-form',
  imports: [
    DividerWithText,
    OauthButtonGroup,
    VerticalSpacing,
    AppInput,
    AppButton,
    RevealUnderline,
    PasswordHints,
    Alert,
    Spinner,
    SvgIconComponent
  ],
  templateUrl: './register-form.html',
  styleUrl: './register-form.css'
})
export class RegisterForm {
  @Output() goToLogIn = new EventEmitter()
  showError = signal(false)
  registrationSuccess: boolean = false
  errorMessage = ''

  firstSubmit: boolean = false
  form: FormGroup
  passwordInputType: Extract<InputType, 'password' | 'text'> = 'password'
  passwordSvgFileName: 'eye' | 'eye-slash' = 'eye'
  loading: boolean = false

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
    if (this.form.invalid) {
      this.form.markAllAsTouched()
      return
    }

    const credentials: Credentials = {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value
    }

    this.showLoader()
    this.authService.register(credentials)
      .pipe(finalize(() => this.hideLoader()))
      .subscribe({
        next: () => {
          this.registrationSuccess = true
        },
        error: err => {
          this.errorMessage = getErrorMessageForCode(err.error.code)
          this.showError.set(true)
          this.getControl('email').setErrors({emailTaken: true})
          console.log(err)
        }
      })
  }

  showLoader() {
    this.loading = true
  }

  hideLoader() {
    this.loading = false
  }

  showPassword = () => {
    const isHidden = this.passwordInputType === 'password';

    this.passwordInputType = isHidden ? 'text' : 'password';
    this.passwordSvgFileName = isHidden ? 'eye-slash' : 'eye';
  }
}
