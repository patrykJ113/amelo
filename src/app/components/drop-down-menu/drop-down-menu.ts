import {Component, effect, Input, WritableSignal} from '@angular/core';
import {NgClass} from '@angular/common';
import {CdkTrapFocus} from '@angular/cdk/a11y';

@Component({
  selector: 'drop-down-menu',
  imports: [
    NgClass,
    CdkTrapFocus
  ],
  templateUrl: './drop-down-menu.html',
  standalone: true,
  styleUrl: './drop-down-menu.css'
})
export class DropDownMenu {
  panelTabIndex: number = 0
  @Input() open: WritableSignal<boolean> | undefined

  onEscKeyDown() {
    this.open?.set(false)
  }

  constructor() {
    effect(() => {
      if(this.open?.()) {
        this.panelTabIndex = 0
      }
    });
  }

  close() {
    this.open?.set(false)
  }

  get isOpen(): boolean {
    return this.open ? this.open() : false
  }

  onFocusIn() {
    if(this.panelTabIndex === 0) {
      this.panelTabIndex = -1
    }
  }
}
