import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'drop-down-menu',
  imports: [
    NgClass
  ],
  templateUrl: './drop-down-menu.html',
  styleUrl: './drop-down-menu.css'
})
export class DropDownMenu {
  @Input() open: boolean = false
}
