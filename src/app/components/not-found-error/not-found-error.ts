import {Component, Input} from '@angular/core';
import {SvgIconComponent} from "angular-svg-icon";

@Component({
  selector: 'not-found-error',
    imports: [
        SvgIconComponent
    ],
  templateUrl: './not-found-error.html',
  styleUrl: './not-found-error.css'
})
export class NotFoundError {
  @Input() title: string = ''
  @Input() subTitle: string = ''
}
