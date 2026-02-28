import {Component, Input, WritableSignal} from '@angular/core';
import {NgClass} from '@angular/common';
import {SvgIconComponent} from 'angular-svg-icon';

@Component({
  selector: 'alert',
  imports: [
    NgClass,
    SvgIconComponent
  ],
  templateUrl: './alert.html',
  styleUrl: './alert.css'
})
export class Alert {
  @Input() message: string = ''
  @Input() type: 'ERROR' | 'SUCCESS' = 'SUCCESS'
  @Input() show: WritableSignal<boolean> | undefined

  get isError() {
    return this.isType('ERROR')
  }

  get isSuccess() {
    return this.isType('SUCCESS')
  }

  get svgSrc() {
    let svg = ''

    switch (this.type) {
      case "SUCCESS":
        svg = 'check-circle-solid'
        break
      default:
        svg = 'x-circle-solid'
    }

    return `${svg}.svg`
  }

  isType(type: 'ERROR' | 'SUCCESS') {
    return this.type === type
  }

  isShown() {
    return this.show?.()
  }

  close() {
    this.show?.set(false)
  }
}
