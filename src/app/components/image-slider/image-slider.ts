import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Panel} from '@components/panel/panel';
import {ImageSliderItem} from '@components/image-slider-item/image-slider-item';
import {ImageSliderButton} from '@components/image-slider-button/image-slider-button';
import {SvgIconComponent} from 'angular-svg-icon';
import {VerticalSpacing} from '@components/positioning/vertical-spacing/vertical-spacing';

@Component({
  selector: 'image-slider',
  imports: [
    Panel,
    ImageSliderItem,
    ImageSliderButton,
    SvgIconComponent,
    VerticalSpacing,
  ],
  templateUrl: './image-slider.html',
  styleUrl: './image-slider.css'
})
export class ImageSlider {
  @Input() imageUrls: string[] = []
  @ViewChild('imageSliderItem', { read: ElementRef }) imageSliderItem!: ElementRef;
  currentImageIndex: number = 0
  translate = ''

  get imgWidth() {
    return this.imageSliderItem?.nativeElement.offsetWidth
  }

  next() {
    if((this.currentImageIndex + 1) === this.imageUrls.length) return
    this.currentImageIndex += 1
    this.translate = `translateX(-${this.imgWidth * this.currentImageIndex}px)`
  }

  previous() {
    if(this.currentImageIndex === 0) return
    this.currentImageIndex -= 1
    this.translate = `translateX(-${this.imgWidth * this.currentImageIndex}px)`
  }
}
