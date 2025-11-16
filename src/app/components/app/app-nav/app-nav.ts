import { Component } from '@angular/core';
import {HorizontalSpacing} from '@components/positioning/horizontal-spacing/horizontal-spacing';
import {NavGoToPageButton} from '@components/nav-go-to-page-button/go-to-page-button.component';
import {Logo} from '@components/logo/logo';

@Component({
  selector: 'app-nav',
  imports: [
    HorizontalSpacing,
    NavGoToPageButton,
    Logo
  ],
  templateUrl: './app-nav.html',
  styleUrl: './app-nav.css'
})
export class AppNav {

}
