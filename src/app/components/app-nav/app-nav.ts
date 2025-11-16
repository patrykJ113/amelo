import { Component } from '@angular/core';
import {HorizontalSpacing} from '@components/horizontal-spacing/horizontal-spacing';
import {NavButton} from '@components/nav-button/nav-button';
import {Logo} from '@components/logo/logo';

@Component({
  selector: 'app-nav',
  imports: [
    HorizontalSpacing,
    NavButton,
    Logo
  ],
  templateUrl: './app-nav.html',
  styleUrl: './app-nav.css'
})
export class AppNav {

}
