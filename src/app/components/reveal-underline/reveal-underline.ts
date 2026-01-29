import {Component, Input} from '@angular/core';

@Component({
  selector: 'reveal-underline',
  imports: [],
  templateUrl: './reveal-underline.html',
  styleUrl: './reveal-underline.css'
})
export class RevealUnderline {
  @Input() text: string = ''
  @Input() class: string = ''
  //TODO add this in the add dialog when you have time
}
