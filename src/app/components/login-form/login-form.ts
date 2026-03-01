import {Component, EventEmitter, OnDestroy, Output, signal} from '@angular/core';
import {AppButton} from '@components/app/app-button/app-button';
import {AppInput} from '@components/app/app-input/app-input';
import {DividerWithText} from '@components/divider-with-text/divider-with-text';
import {OauthButtonGroup} from '@components/oauth-button-group/oauth-button-group';
import {RevealUnderline} from '@components/reveal-underline/reveal-underline';
import {VerticalSpacing} from '@components/positioning/vertical-spacing/vertical-spacing';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '@services/auth.service';
import {getFormControl} from '@helpers/get-form-control';
import {Credentials} from '@typings/Credentials';
import {finalize, Subscription} from 'rxjs';
import {Spinner} from '@components/spinner/spinner';
import {Alert} from '@components/alert/alert';
import {getErrorMessageForCode} from '@helpers/get-error-message-for-code';
import {DialogRegistryService} from '@services/dialog-registry.service';
import {InputType} from '@typings/input-type';

@Component({
  selector: 'login-form',
  imports: [
    AppButton,
    AppInput,
    DividerWithText,
    OauthButtonGroup,
    RevealUnderline,
    VerticalSpacing,
    Spinner,
    Alert
  ],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css'
})
export class LoginForm implements OnDestroy {
  @Output() goToRegister = new EventEmitter()
  @Output() goToResetPassword = new EventEmitter()
  control = new FormControl()
  form: FormGroup
  loading: boolean = false
  showError = signal(false)
  errorMessage = ''
  visibleSub: Subscription | undefined
  passwordSvgFileName: 'eye' | 'eye-slash' = 'eye'
  passwordInputType: Extract<InputType, 'password' | 'text'> = 'password'

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private drs: DialogRegistryService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })

    this.visibleSub = this.drs.get('auth-form')?.visible$.subscribe(visible => {
      if(!visible) {
        this.form.reset()
        this.showError.set(false)
      }
    })
  }

  ngOnDestroy() {
    this.visibleSub?.unsubscribe()
  }

  getControl(controlName: string) {
    return getFormControl(this.form, controlName)
  }

  logIn() {
    const credentials: Credentials = {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value
    }

    this.showLoader()
    this.authService.logIn(credentials)
      .pipe(finalize(() => this.hideLoader()))
      .subscribe({
        next: res => {
          const barer = res.headers.get('Authorization')
          if (barer) {
            this.authService.setToken(barer.substring(7))
            this.drs.get('auth-form')?.close()
          }
        },
        error: err => {
          this.errorMessage = getErrorMessageForCode(err.error.code)
          this.showError.set(true)
          console.error(err)
        }
      })
  }

  showLoader() {
    this.loading = true
  }

  hideLoader() {
    this.loading = false
  }

  onSignUpEnterKeyDow() {
    this.goToRegister.emit()
  }

  onForgotPasswordEnterKeyDow() {
    this.goToResetPassword.emit()
  }

  showPassword = () => {
    const isHidden = this.passwordInputType === 'password';

    this.passwordInputType = isHidden ? 'text' : 'password';
    this.passwordSvgFileName = isHidden ? 'eye-slash' : 'eye';
  }
}
