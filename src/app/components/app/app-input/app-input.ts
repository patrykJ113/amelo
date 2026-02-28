import {Component, Input, OnInit} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';
import {InputType} from '@typings/input-type';
import {getErrorMessage} from '@helpers/get-error-message';
import {SvgIconComponent} from 'angular-svg-icon';

@Component({
  selector: 'app-input',
  imports: [
    ReactiveFormsModule,
    NgClass,
    SvgIconComponent
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
  @Input() svgFileName: string = ''
  @Input() svgCb: (() => void) | undefined

  ngOnInit() {
    if(this.disabled) this.control.disable()
  }

  get isError() {
    return this.control.invalid && ( this.control.touched || this.control.dirty )
  }

  getErrorMsg() {
    return getErrorMessage(this.control, this.label)
  }

  get hasSvg() {
    return this.svgFileName !== ''
  }

  get hasCallback() {
    return this.svgCb
  }
}
