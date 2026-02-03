import {Component, Input} from '@angular/core';
import {SvgIconComponent} from 'angular-svg-icon';
import {HorizontalSpacing} from '@components/positioning/horizontal-spacing/horizontal-spacing';

@Component({
  selector: 'menu-item',
  imports: [
    SvgIconComponent,
    HorizontalSpacing
  ],
  templateUrl: './menu-item.html',
  styleUrl: './menu-item.css'
})
export class MenuItem {
  @Input() svgSrc: string = ''
  @Input() text: string = ''

  get src() {
    return `${this.svgSrc}.svg`
  }
}
