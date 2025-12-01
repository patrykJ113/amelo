import {Component, Input} from '@angular/core';
import {AppInput} from '@components/app/app-input/app-input';
import {InputType} from '@typings/input-type';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-textarea',
  imports: [
    AppInput
  ],
  templateUrl: './app-textarea.html',
  styleUrl: './app-textarea.css'
})
export class AppTextarea {
  @Input() label: string = ''
  @Input() disabled: boolean = false
  @Input() control!: FormControl
}
