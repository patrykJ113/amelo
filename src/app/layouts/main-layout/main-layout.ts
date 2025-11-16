import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AppNav} from '@components/app/app-nav/app-nav';

@Component({
  selector: 'main-layout',
  imports: [
    RouterOutlet,
    AppNav
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css'
})
export class MainLayout {

}
