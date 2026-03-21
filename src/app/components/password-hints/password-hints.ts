import {Component, Input} from '@angular/core';
import {PasswordHint} from '@components/password-hint/password-hint';
import {VerticalSpacing} from '@components/positioning/vertical-spacing/vertical-spacing';
import {Tooltip} from '@components/show-on-hover/tooltip.component';
import {SvgIconComponent} from 'angular-svg-icon';

@Component({
  selector: 'password-hints',
  imports: [
    PasswordHint,
    VerticalSpacing,
    Tooltip,
    SvgIconComponent,
  ],
  templateUrl: './password-hints.html',
  styleUrl: './password-hints.css'
})
export class PasswordHints {
  @Input() password: string = ''
  @Input() firstSubmit: boolean = false

  get hasCorrectLength() {
    return this.password.length >= 8 && this.password.length <= 20
  }

  get hasUpperCaseCharacter() {
    return /[A-Z]/.test(this.password);
  }

  get hasLowerCaseCharacter() {
    return /[a-z]/.test(this.password);
  }

  get hasSpecialCharacter() {
    return /[!@#$%^&*()\-_=\+\[\]{};:,.<>?/\\|~`]/.test(this.password);
  }

  get hasNumber() {
    return /\d/.test(this.password);
  }
}
