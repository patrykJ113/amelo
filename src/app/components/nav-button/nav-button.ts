import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'nav-button',
  imports: [
    RouterLink
  ],
  templateUrl: './nav-button.html',
  styleUrl: './nav-button.css'
})
export class NavButton {
  @Input() label: string = 'Click'
  @Input() pageUrl: string = '/'
}
