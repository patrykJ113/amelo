import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {HorizontalSpacing} from '@components/positioning/horizontal-spacing/horizontal-spacing';
import {DialogService} from '@services/dialog.service';
import {DialogRegistryService} from '@services/dialog-registry.service';
import {CdkTrapFocus} from '@angular/cdk/a11y';
import {AppButton} from '@components/app/app-button/app-button';
import {VerticalSpacing} from '@components/positioning/vertical-spacing/vertical-spacing';
import {Backdrop} from '@components/backdrop/backdrop';
import {CloseIconButton} from '@components/close-icon-button/close-icon-button';
import {Subscription} from 'rxjs';

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
export class DialogBuilder implements OnInit, OnDestroy {
  @Input() hasCloseIcon: boolean = true
  @Input() hasCancelButton: boolean = true
  @Input() dialogRegistryId: string = ''
  @Input() title: string = ''
  @Input() dialogPanelClass: string = ''
  sub?: Subscription
  panelTabIndex: number = 0

  constructor(
    private dialogService: DialogService,
    private dialogRegistry: DialogRegistryService
  ) {
  }

  ngOnInit() {
    this.dialogRegistry.register(this.dialogRegistryId, this.dialogService)

    this.sub = this.dialogService.visible$.subscribe(open => {
      if(open) {
        this.panelTabIndex = 0
      }
    })
  }

  ngOnDestroy() {
    this.sub?.unsubscribe()
    this.dialogRegistry.unregister(this.dialogRegistryId)
  }

  get isOpen() {
    return this.dialogService.isOpen()
  }

  close() {
    this.dialogService.close()
  }

  onFocusIn() {
    if(this.panelTabIndex === 0) {
      this.panelTabIndex = -1
    }
  }
}
