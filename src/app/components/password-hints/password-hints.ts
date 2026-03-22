import {Component, Input} from '@angular/core';
import {PasswordHint} from '@components/password-hint/password-hint';
import {VerticalSpacing} from '@components/positioning/vertical-spacing/vertical-spacing';

@Component({
  selector: 'password-hints',
  imports: [
    PasswordHint,
    VerticalSpacing,
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
