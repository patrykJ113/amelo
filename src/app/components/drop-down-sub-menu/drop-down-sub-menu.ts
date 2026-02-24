import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'drop-down-sub-menu',
  imports: [
    NgClass
  ],
  templateUrl: './drop-down-sub-menu.html',
  styleUrl: './drop-down-sub-menu.css'
})
export class DropDownSubMenu {
  @Input() divider: boolean = true
}
