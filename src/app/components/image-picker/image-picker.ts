import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ImageSlot} from '@components/image-slot/image-slot';

@Component({
  selector: 'image-picker',
  imports: [
    ImageSlot
  ],
  templateUrl: './image-picker.html',
  styleUrl: './image-picker.css'
})
export class ImagePicker {
 @Input() control!: FormControl
  numbers = Array.from({ length: 6 }, (_, i) => i + 1);

  onFileChange(e: Event) {
    const input = e.target as HTMLInputElement
    if(!input.files?.length) return
    const filesArray = Array.from(input.files)
    this.control.setValue(filesArray)
  }
}
