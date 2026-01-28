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

  constructor(
    private dialogService: DialogService,
    private dialogRegistry: DialogRegistryService
  ) {
  }

  ngOnInit() {
    this.dialogRegistry.register(this.dialogRegistryId, this.dialogService)
  }

  get open() {
    return this.dialogService.isOpen()
  }

  close() {
    this.dialogService.close()
  }
}
