import {Component, Input, WritableSignal} from '@angular/core';
import {NgClass} from '@angular/common';
import {CdkTrapFocus} from '@angular/cdk/a11y';

@Component({
  selector: 'drop-down-menu',
  imports: [
    NgClass,
    CdkTrapFocus
  ],
  templateUrl: './drop-down-menu.html',
  styleUrl: './drop-down-menu.css'
})
export class DropDownMenu {
  @Input() open: WritableSignal<boolean> | undefined

  onEscKeyDown() {
    this.open?.set(false)
  }

  get isOpen(): boolean {
    return this.open ? this.open() : false
  }
}
