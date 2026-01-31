import {Component, Input} from '@angular/core';
import {SvgIconComponent} from 'angular-svg-icon';
import {NgClass} from '@angular/common';

@Component({
  selector: 'image-slider-button',
  imports: [
    SvgIconComponent,
    NgClass
  ],
  templateUrl: './image-slider-button.html',
  styleUrl: './image-slider-button.css'
})
export class ImageSliderButton {
  @Input() direction: 'prev' | 'next' = 'prev'

  get isPrev() {
    return this.direction === 'prev'
  }

  get chevronUrl() {
    const chevronDirection = this.isPrev ? 'left' : 'right'
    return `chevron-${chevronDirection}.svg`
  }
}
