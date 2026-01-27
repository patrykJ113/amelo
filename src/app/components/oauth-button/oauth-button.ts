import {Component, Input} from '@angular/core';
import {SvgIconComponent} from 'angular-svg-icon';

@Component({
  selector: 'oauth-button',
  imports: [
    SvgIconComponent
  ],
  templateUrl: './oauth-button.html',
  styleUrl: './oauth-button.css'
})
export class OauthButton {
  @Input() company: 'Fb' | 'Google' |'Apple' = "Google"

  get companySvgSrc() {
    return `${this.company.toLowerCase()}.svg`
  }
}
