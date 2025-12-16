import {
  Component, DoCheck, ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output, ViewChild,
} from '@angular/core';
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
export class ImageSlot implements OnInit, DoCheck {
  @Input() index!: number
  @Input() control!: FormControl
  @Output() openFIlePicker: EventEmitter<void> = new EventEmitter
  @ViewChild('image_slot') imageSlot!: ElementRef<HTMLDivElement>;
  blobUrl: string = ''

  ngOnInit() {
    this.control.valueChanges.subscribe(value => {
      if (!this.control.value || !this.control.value[this.index]) {
        this.blobUrl = ''
      } else {
        this.blobUrl = URL.createObjectURL(this.control.value[this.index])
      }
    })
  }

  ngDoCheck() {
    this.imageSlot?.nativeElement.blur()
  }

  get isFirstWithoutImag() {
    if (!this.control.value) return this.index === 0
    return this.control.value[this.index] === undefined && this.control.value[this.index - 1]
  }

  removeImage() {
    const tmpArr = [...this.control.value];
    tmpArr.splice(this.index, 1);

    let controlValue = tmpArr.length ? tmpArr : null
    this.control.setValue(controlValue);
  }

  onKayDown({key}: KeyboardEvent) {
    const isEnter = key === 'Enter'
    if (isEnter) {
      this.blobUrl ? this.removeImage() : this.openFIlePicker.emit()
    }
  }
}
