import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'nav-go-to-page-button',
  imports: [
    RouterLink
  ],
  templateUrl: './go-to-page-button.component.html',
  styleUrl: './go-to-page-button.component.css'
})
export class NavGoToPageButton {
  @Input() label: string = 'Click'
  @Input() pageUrl: string = '/'
}
