import {Component, Input} from '@angular/core';
import {AppButton} from '@components/app/app-button/app-button';
import {SvgIconComponent} from 'angular-svg-icon';

@Component({
  selector: 'server-error',
  imports: [
    AppButton,
    SvgIconComponent
  ],
  templateUrl: './server-error.html',
  styleUrl: './server-error.css'
})
export class ServerError {
  @Input() title: string = ''
  @Input() subTitle: string = ''
  @Input() retryCallBack!: () => void
}
