import {Component, Input} from '@angular/core';
import {DropDownMenu} from '@components/drop-down-menu/drop-down-menu';
import {DropDownSubMenu} from '@components/drop-down-sub-menu/drop-down-sub-menu';
import {MenuItem} from '@components/menu-item/menu-item';

@Component({
  selector: 'avatar-dropdown',
  imports: [
    DropDownMenu,
    DropDownSubMenu,
    MenuItem
  ],
  templateUrl: './avatar-dropdown.html',
  styleUrl: './avatar-dropdown.css'
})
export class AvatarDropdown {
  @Input() initials: string = ''
  open: boolean = false

  toggleDropDown() {
    this.open = !this.open
  }

  openDropdown() {
    this.open = true
  }

  closeDropDown() {
    this.open = false
  }
}
