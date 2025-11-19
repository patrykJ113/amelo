import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './app-input.html',
  styleUrl: './app-input.css'
})
export class AppInput {
  @Input() label: string = ''
  @Input() disabled: boolean = false
}
