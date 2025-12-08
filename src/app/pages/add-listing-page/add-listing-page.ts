import {Component} from '@angular/core';
import {AppButton} from '@components/app/app-button/app-button';
import {ListingForm} from '@components/listing-form/listing-form';
import {SvgIconComponent} from 'angular-svg-icon';
import {VerticalSpacing} from '@components/positioning/vertical-spacing/vertical-spacing';
import {HorizontalSpacing} from '@components/positioning/horizontal-spacing/horizontal-spacing';

@Component({
  selector: 'add-listing-page',
  imports: [
    AppButton,
    ListingForm,
    SvgIconComponent,
    VerticalSpacing,
    HorizontalSpacing
  ],
  templateUrl: './add-listing-page.html',
  styleUrl: './add-listing-page.css'
})
export class AddListingPage {
}
