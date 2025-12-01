import {Component, Input} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-input',
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './app-input.html',
  styleUrl: './app-input.css'
})
export class AppInput {
  @Input() label: string = ''
  @Input() disabled: boolean = false
  @Input() isTextArea: boolean = false
  @Input() control!: FormControl

  get isError() {
    return this.control.invalid && ( this.control.touched || this.control.dirty )
  }
}
