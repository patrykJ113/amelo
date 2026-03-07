import {Component, Input} from '@angular/core';
import {Size} from '@typings/size';
import {NgClass} from '@angular/common';
import {SizeService} from '@services/size.service';

@Component({
  selector: 'spinner',
  imports: [
    NgClass
  ],
  templateUrl: './spinner.html',
  styleUrl: './spinner.css'
})
export class Spinner {
  @Input() size: Size = 'base'
  @Input() color: 'BLUE' | 'WHITE' = 'BLUE'

  constructor(protected sizeService: SizeService) {
  }

  get isSpinnerBlue() {
    return this.color === 'BLUE'
  }

  get isSpinnerWhite() {
    return this.color === 'WHITE'
  }

  get has5pxBorder() {
    const { isBase, isMd, isLg, isXl } = this.sizeService
    return isBase(this.size) || isMd(this.size) || isLg(this.size) || isXl(this.size)
  }

  get has3pxBorder() {
    const { isXs, isSm } = this.sizeService
    return isXs(this.size) || isSm(this.size)
  }
}
