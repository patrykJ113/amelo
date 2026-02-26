import {Component, Input} from '@angular/core';
import {SvgIconComponent} from 'angular-svg-icon';
import {NgClass} from '@angular/common';

@Component({
  selector: 'password-hint',
  imports: [
    SvgIconComponent,
    NgClass
  ],
  templateUrl: './password-hint.html',
  styleUrl: './password-hint.css'
})
export class PasswordHint {
  @Input() hint: string = ''
  @Input() meetsRequirement: boolean = false
  @Input() firstSubmit: boolean = false

  get src() {
    if (!this.firstSubmit) return 'check-circle.svg'
    return `${this.meetsRequirement ? 'check-circle' : 'x-circle-solid'}.svg`
  }
}
