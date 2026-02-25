import { Component } from '@angular/core';
import {PasswordHint} from '@components/password-hint/password-hint';
import {VerticalSpacing} from '@components/positioning/vertical-spacing/vertical-spacing';

@Component({
  selector: 'password-hints',
  imports: [
    PasswordHint,
    VerticalSpacing
  ],
  templateUrl: './password-hints.html',
  styleUrl: './password-hints.css'
})
export class PasswordHints {

}
