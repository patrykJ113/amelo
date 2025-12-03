import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './app-button.html',
  styleUrl: './app-button.css'
})
export class AppButton {
  @Input() label: string = 'Click'
  @Input() type: 'button' | 'submit' = 'button'
}
