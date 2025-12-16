import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SvgIconComponent} from 'angular-svg-icon';
import {NgClass} from '@angular/common';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'image-slot',
  imports: [
    SvgIconComponent,
    NgClass
  ],
  templateUrl: './image-slot.html',
  styleUrl: './image-slot.css'
})
export class ImageSlot implements OnInit{
  @Input() index!: number
  @Input() control!: FormControl
  blobUrl: string = ''

  ngOnInit() {
    this.control.valueChanges.subscribe(value => {
      if(!this.control.value || !this.control.value[this.index]) {
        this.blobUrl = ''
      } else {
        this.blobUrl = URL.createObjectURL(this.control.value[this.index])
      }
    })
  }

  get isFirstWithoutImag() {
    if (!this.control.value) return this.index === 0
    return this.control.value[this.index] === undefined && this.control.value[this.index -1]
  }

  removeImage() {
    const arr = [...this.control.value];
    arr.splice(this.index, 1);
    this.control.setValue(arr);
  }
}
