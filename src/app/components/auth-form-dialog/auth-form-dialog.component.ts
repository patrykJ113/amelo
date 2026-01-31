import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {DialogBuilder} from '@components/dialog-builder/dialog-builder.component';
import {RegisterForm} from '@components/register-form/register-form';
import {LoginForm} from '@components/login-form/login-form';
import {AuthFormVariant} from '@typings/auth-form-variant';
import {ResetPasswordForm} from '@components/reset-password-form/reset-password-form';
import {from} from 'rxjs';

@Component({
  selector: 'auth-form-dialog',
  imports: [
    DialogBuilder,
    RegisterForm,
    LoginForm,
    ResetPasswordForm
  ],
  templateUrl: './auth-form-dialog.component.html',
  styleUrl: './auth-form-dialog.component.css'
})
export class AuthFormDialog {
  @Input() shownForm: AuthFormVariant = 'LOG_IN'
  @ViewChild(LoginForm, {read: ElementRef}) loginForm!: ElementRef
  @ViewChild(RegisterForm, {read: ElementRef}) registerForm!: ElementRef
  @ViewChild(ResetPasswordForm, {read: ElementRef}) resetPasswordForm!: ElementRef

  get isLogIn() {
    return this.shownForm === 'LOG_IN'
  }

  get isRegister() {
    return this.shownForm === 'REGISTER'
  }

  get isPasswordReset() {
    return this.shownForm === 'PASSWORD_RESET'
  }

  goToRegister() {
    this.startAnimation('REGISTER')
  }

  goToLogIn() {
    this.startAnimation('LOG_IN')
  }

  goToPasswordReset() {
    this.shownForm = 'PASSWORD_RESET'
  }

  startAnimation(form: AuthFormVariant) {
    let formEl: ElementRef = form === 'LOG_IN' ? this.registerForm : this.loginForm

    const onEnd = () => {
      formEl.nativeElement.classList.remove('leave-animation')
      formEl.nativeElement.removeEventListener('animationend', onEnd)
      this.shownForm = form
    }
    formEl.nativeElement.classList.add('leave-animation')
    formEl.nativeElement.addEventListener('animationend', onEnd)
  }
}
