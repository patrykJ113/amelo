import {Component, Input} from '@angular/core';
import {AppButton} from '@components/app/app-button/app-button';
import {Tooltip} from '@components/show-on-hover/tooltip.component';

@Component({
  selector: 'add-listing-button',
  imports: [
    AppButton,
    Tooltip
  ],
  templateUrl: './add-listing-button.html',
  styleUrl: './add-listing-button.css'
})
export class AddListingButton {
  @Input() disabled: boolean = true
  @Input() loading: boolean = true
}
