import {Component, ElementRef, Input, signal, ViewChild, WritableSignal} from '@angular/core';
import {DropDownMenu} from '@components/drop-down-menu/drop-down-menu';
import {DropDownSubMenu} from '@components/drop-down-sub-menu/drop-down-sub-menu';
import {MenuItem} from '@components/menu-item/menu-item';
import {Avatar} from '@components/avatar/avatar';

@Component({
  selector: 'avatar-dropdown',
  imports: [
    DropDownMenu,
    DropDownSubMenu,
    MenuItem,
    Avatar,
  ],
  host: {
    '(document:click)': 'onClick($event)',
    '(document:scroll)': 'onScroll()'
  },
  templateUrl: './avatar-dropdown.html',
  styleUrl: './avatar-dropdown.css'
})
export class AvatarDropdown {
  @Input() initials: string = ''
  @ViewChild('dropdown', {read: ElementRef}) dropdown!: ElementRef
  open: WritableSignal<boolean> = signal(false)

  onClick(e: PointerEvent) {
    const clickOutsideDropDown = !this.dropdown.nativeElement.contains(e.target)
    if (clickOutsideDropDown) this.closeDropdown()
  }

  onScroll() {
    if(this.open()) this.closeDropdown()
  }

  toggleDropdown() {
    this.open.update(old => !old)
  }

  openDropdown() {
    this.open.set(true)
  }

  closeDropdown() {
    this.open.set(false)
  }

  logOut = () => {
    console.log('logOut called!!!')
  }
}
