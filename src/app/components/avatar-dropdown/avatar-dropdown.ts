import {Component, ElementRef, HostListener, Input, ViewChild} from '@angular/core';
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
  host: {
    '(document:click)': 'onClick($event)'
  },
  templateUrl: './avatar-dropdown.html',
  styleUrl: './avatar-dropdown.css'
})
export class AvatarDropdown {
  @Input() initials: string = ''
  @ViewChild('dropdown', {read: ElementRef}) dropdown!: ElementRef
  open: boolean = false

  onClick(e: PointerEvent) {
    const clickOutsideDropDown = !this.dropdown.nativeElement.contains(e.target)
    if (clickOutsideDropDown) this.closeDropdown()
  }

  toggleDropdown() {
    this.open = !this.open
  }

  openDropdown() {
    this.open = true
  }

  closeDropdown() {
    this.open = false
  }
}
