import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [
    NgClass
  ],
  templateUrl: './app-button.html',
  styleUrl: './app-button.css'
})
export class AppButton {
  @Input() label: string = 'Click'
  @Input() disabled: boolean = false
  @Input() type: 'button' | 'submit' = 'button'
}
