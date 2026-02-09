import { Component } from '@angular/core';
import {NavGoToPageButton} from '@components/nav-go-to-page-button/go-to-page-button.component';
import {Logo} from '@components/logo/logo';
import {AvatarDropdown} from '@components/avatar-dropdown/avatar-dropdown';

@Component({
  selector: 'app-nav',
  imports: [
    NavGoToPageButton,
    Logo,
    AvatarDropdown
  ],
  templateUrl: './app-nav.html',
  styleUrl: './app-nav.css'
})
export class AppNav {

}
