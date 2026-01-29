import {Component, HostListener, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {NgClass} from '@angular/common';
import {DialogService} from '@services/dialog.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'backdrop',
  imports: [
    NgClass
  ],
  templateUrl: './backdrop.html',
  styleUrl: './backdrop.css'
})
export class Backdrop implements OnInit, OnDestroy {
  sub!: Subscription

  constructor(
    private dialogService: DialogService,
    private renderer: Renderer2,
  ) {
  }

  ngOnInit() {
    this.sub = this.dialogService.visible$.subscribe(open => {
      if (open) {
        this.renderer.setStyle(document.body, 'overflow', 'hidden');
      } else {
        this.renderer.removeStyle(document.body, 'overflow');
      }
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe()
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
