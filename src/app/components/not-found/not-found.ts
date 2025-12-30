import { Component } from '@angular/core';
import {SvgIconComponent} from 'angular-svg-icon';
import {VerticalSpacing} from '@components/positioning/vertical-spacing/vertical-spacing';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'not-found',
  imports: [
    SvgIconComponent,
    VerticalSpacing,
    RouterLink
  ],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css'
})
export class NotFound {

}
