import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';
import {ButtonVariant} from '@typings/button-variant';
import {Size} from '@typings/size';
import {SizeService} from '@services/size.service';
import {Spinner} from '@components/spinner/spinner';

@Component({
  selector: 'app-button',
  imports: [
    NgClass,
    Spinner
  ],
  templateUrl: './app-button.html',
  styleUrl: './app-button.css'
})
export class AppButton {
  @Input() label: string = 'Click'
  @Input() disabled: boolean = false
  @Input() type: 'button' | 'submit' = 'button'
  @Input() variant: ButtonVariant = 'Primary'
  @Input() class: string = ''
  @Input() size: Size = 'base'
  @Input() loading: boolean = false

  constructor(private sizeService: SizeService) {
  }

  get isPrimary() {
    return this.variant === 'Primary' && this.isEnabled
  }

  get isOutline() {
    return this.variant === 'Outline' && this.isEnabled
  }

  get isText() {
    return this.variant === 'Text' && this.isEnabled
  }

  get showRingOnFocusVisible() {
    return this.isPrimary || this.isOutline
  }

  get hasCursorPointer() {
    return this.allBesideDisabled
  }

  get hasBlueText() {
    return this.isOutline || this.isText
  }

  get hasTransparentBorder() {
    return this.isText
  }

  get scaleTextOnHover() {
    return this.allBesideDisabled
  }

  get allBesideDisabled() {
    return this.isPrimary || this.isOutline || this.isText
  }

  get isDisabledPrimary() {
    return this.variant === 'Primary' && this.disabled
  }

  get isDisabledText() {
    return this.variant === 'Text' && this.disabled
  }

  get isBase() {
    return this.sizeService.isBase(this.size)
  }

  get isSm() {
    return this.sizeService.isSm(this.size)
  }

  get cursorNotAllowed() {
    return this.disabled || this.loading
  }

  get borderBlue400OnHover() {
    return this.isPrimary && !this.loading
  }

  get isEnabled() {
    return !this.disabled
  }
}
