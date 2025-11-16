import { Component } from '@angular/core';
import {HorizontalSpacing} from '@components/horizontal-spacing/horizontal-spacing';
import {NavButton} from '@components/nav-button/nav-button';

@Component({
  selector: 'app-nav',
  imports: [
    HorizontalSpacing,
    NavButton
  ],
  templateUrl: './app-nav.html',
  styleUrl: './app-nav.css'
})
export class AppNav {

}
