import {Component, Input} from '@angular/core';

@Component({
  selector: 'divider-with-text',
  imports: [],
  templateUrl: './divider-with-text.html',
  styleUrl: './divider-with-text.css'
})
export class DividerWithText {
  @Input() text: string = ''
}
