import {Component, HostListener, Input, OnInit, Renderer2} from '@angular/core';
import {HorizontalSpacing} from '@components/positioning/horizontal-spacing/horizontal-spacing';
import {SvgIconComponent} from 'angular-svg-icon';
import {NgClass} from '@angular/common';
import {DialogService} from '@services/dialog.service';
import {DialogRegistryService} from '@services/dialog-registry.service';
import {CdkTrapFocus} from '@angular/cdk/a11y';
import {AppButton} from '@components/app/app-button/app-button';
import {VerticalSpacing} from '@components/positioning/vertical-spacing/vertical-spacing';

@Component({
  selector: 'dialog-builder',
  imports: [
    HorizontalSpacing,
    SvgIconComponent,
    NgClass,
    CdkTrapFocus,
    AppButton,
    VerticalSpacing
  ],
  providers: [DialogService],
  templateUrl: './dialog-builder.component.html',
  styleUrl: './dialog-builder.component.css'
})
export class DialogBuilder implements OnInit {
  @Input() hasCloseIcon: boolean = true
  @Input() hasCancelButton: boolean = true
  @Input() dialogRegistryId: string = ''
  @Input() title: string = ''

  constructor(
    private renderer: Renderer2,
    private dialogService: DialogService,
    private dialogRegistry: DialogRegistryService
  ) {
  }

  ngOnInit() {
    this.dialogRegistry.register(this.dialogRegistryId, this.dialogService)

    this.dialogService.visible$.subscribe(open => {
      if (open) {
        this.renderer.setStyle(document.body, 'overflow', 'hidden');
      } else {
        this.renderer.removeStyle(document.body, 'overflow');
      }
    })
  }

  @HostListener('document:keydown.escape')
  onEscape() {
    if(this.open) {
      this.close()
    }
  }

  get open() {
    return this.dialogService.isOpen()
  }

  close() {
    this.dialogService.close()
  }
}
