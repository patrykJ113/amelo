import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  OnDestroy, OnInit
} from '@angular/core';
import {DialogBuilder} from '@components/dialog-builder/dialog-builder.component';
import {RegisterForm} from '@components/register-form/register-form';
import {LoginForm} from '@components/login-form/login-form';
import {ResetPasswordForm} from '@components/reset-password-form/reset-password-form';
import {AuthFormVariant} from '@typings/auth-form-variant';
import {AuthFormService} from '@services/auth-form.service';
import {Subscription} from 'rxjs';

const LEAVE_ANIMATION_CLASS = 'leave-animation';

@Component({
  selector: 'auth-form-dialog',
  imports: [DialogBuilder, RegisterForm, LoginForm, ResetPasswordForm],
  templateUrl: './auth-form-dialog.component.html',
  styleUrl: './auth-form-dialog.component.css'
})
export class AuthFormDialog implements OnDestroy, OnInit {
  shownForm: AuthFormVariant = 'LOG_IN';
  private variantSub!: Subscription;
  @ViewChild('login', {read: ElementRef}) loginForm?: ElementRef<HTMLElement>;
  @ViewChild('register', {read: ElementRef}) registerForm?: ElementRef<HTMLElement>;

  constructor(private authFormService: AuthFormService) {
  }

  ngOnInit() {
    this.variantSub = this.authFormService.$variantChange.subscribe(variant => {
      this.shownForm = variant
    })
  }

  private activeAnimationEl?: HTMLElement;

  get isLogIn(): boolean {
    return this.shownForm === 'LOG_IN';
  }

  get isRegister(): boolean {
    return this.shownForm === 'REGISTER';
  }

  get isPasswordReset(): boolean {
    return this.shownForm === 'PASSWORD_RESET';
  }

  goToRegister(): void {
    this.switchWithAnimation('REGISTER', this.loginForm);
  }

  goToLogIn(): void {
    this.switchWithAnimation('LOG_IN', this.registerForm);
  }

  goToPasswordReset(): void {
    // this.shownForm = 'PASSWORD_RESET';
  }

  private switchWithAnimation(target: AuthFormVariant, source?: ElementRef<HTMLElement>): void {
    const el = source?.nativeElement;
    if (!el) {
      this.shownForm = target;
      return;
    }

    this.cleanupAnimation();

    this.activeAnimationEl = el;
    el.classList.add(LEAVE_ANIMATION_CLASS);

    const handler = () => {
      el.classList.remove(LEAVE_ANIMATION_CLASS);
      el.removeEventListener('animationend', handler);
      this.shownForm = target;
      this.activeAnimationEl = undefined;
    };

    el.addEventListener('animationend', handler, {once: true});
  }

  private cleanupAnimation(): void {
    if (!this.activeAnimationEl) return;
    this.activeAnimationEl.classList.remove(LEAVE_ANIMATION_CLASS);
    this.activeAnimationEl = undefined;
  }

  ngOnDestroy(): void {
    this.cleanupAnimation();
    this.variantSub.unsubscribe()
  }
}
