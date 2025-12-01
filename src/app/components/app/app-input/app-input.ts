import {Component, Input, OnInit} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';
import {InputType} from '@typings/input-type';

@Component({
  selector: 'app-input',
  imports: [
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './app-input.html',
  styleUrl: './app-input.css'
})
export class AppInput implements OnInit {
  @Input() label: string = ''
  @Input() disabled: boolean = false
  @Input() type: InputType = 'text'
  @Input() isTextArea: boolean = false
  @Input() control!: FormControl

  ngOnInit() {
    if(this.disabled) this.control.disable()
  }

  get isError() {
    return this.control.invalid && ( this.control.touched || this.control.dirty )
  }
}
