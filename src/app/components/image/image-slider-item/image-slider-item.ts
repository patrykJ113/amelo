import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'image-slider-item',
  imports: [
    NgClass
  ],
  templateUrl: './image-slider-item.html',
  styleUrl: './image-slider-item.css'
})
export class ImageSliderItem {
  imageIsLoaded: boolean = false
  @Input() src: string = ''

  onLoad() {
    this.imageIsLoaded = true
  }
}
