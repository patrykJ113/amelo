import {Component, Input, OnInit} from '@angular/core';
import {HorizontalSpacing} from '@components/positioning/horizontal-spacing/horizontal-spacing';
import {DialogService} from '@services/dialog.service';
import {DialogRegistryService} from '@services/dialog-registry.service';
import {CdkTrapFocus} from '@angular/cdk/a11y';
import {AppButton} from '@components/app/app-button/app-button';
import {VerticalSpacing} from '@components/positioning/vertical-spacing/vertical-spacing';
import {Backdrop} from '@components/backdrop/backdrop';
import {CloseIconButton} from '@components/close-icon-button/close-icon-button';

@Component({
  selector: 'dialog-builder',
  imports: [
    HorizontalSpacing,
    CdkTrapFocus,
    AppButton,
    VerticalSpacing,
    Backdrop,
    CloseIconButton,
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
  @Input() dialogPanelClass: string = ''
  panelTabIndex: number = 0

  constructor(
    private dialogService: DialogService,
    private dialogRegistry: DialogRegistryService
  ) {
  }

  onFocusIn() {
    if(this.panelTabIndex === 0) {
      this.panelTabIndex = -1
    }
  }

  ngOnInit() {
    this.dialogRegistry.register(this.dialogRegistryId, this.dialogService)
    this.dialogRegistry.get(this.dialogRegistryId)?.visible$.subscribe(open => {
      if(open) {
        this.panelTabIndex = 0
      }
    })
  }

  get open() {
    return this.dialogService.isOpen()
  }

  close() {
    this.dialogService.close()
  }
}
