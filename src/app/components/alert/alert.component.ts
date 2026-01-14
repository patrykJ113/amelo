import {Component, Input} from '@angular/core';
import {Variant} from '@typings/variant';
import {NgClass} from '@angular/common';
import {SvgIconComponent} from 'angular-svg-icon';

@Component({
  selector: 'alert',
  imports: [
    NgClass,
    SvgIconComponent
  ],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class Alert {
  @Input() variant: Variant = 'Info'
  @Input() text = ''

  isError() {
    return this.variant === 'Error'
  }

  isInfo() {
    return this.variant === 'Info'
  }

  isWarning() {
    return this.variant === 'Warning'
  }

  isSuccess() {
    return this.variant === 'Success'
  }

  get svgUrl() {
    return `${this.variant.toLowerCase()}.svg`
  }
}
