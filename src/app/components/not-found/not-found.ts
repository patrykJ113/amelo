import { Component } from '@angular/core';
import {SvgIconComponent} from 'angular-svg-icon';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'not-found',
  imports: [
    SvgIconComponent,
    RouterLink
  ],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css'
})
export class NotFound {

}
