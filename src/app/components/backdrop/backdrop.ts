import {Component, HostListener, OnInit, Renderer2} from '@angular/core';
import {NgClass} from '@angular/common';
import {DialogService} from '@services/dialog.service';

@Component({
  selector: 'backdrop',
  imports: [
    NgClass
  ],
  templateUrl: './backdrop.html',
  styleUrl: './backdrop.css'
})
export class Backdrop implements OnInit {
  constructor(
    private dialogService: DialogService,
    private renderer: Renderer2,
  ) {
  }

  ngOnInit() {
    this.dialogService.visible$.subscribe(open => {
      if (open) {
        this.renderer.setStyle(document.body, 'overflow', 'hidden');
      } else {
        this.renderer.removeStyle(document.body, 'overflow');
      }
    })
  }

  close() {
    this.dialogService.close()
  }

  get open() {
    return this.dialogService.isOpen()
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if (this.open) {
      this.close()
    }
  }
}
