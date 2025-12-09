import {Component, Input} from '@angular/core';
import {Listing} from '@typings/listing';
import {SvgIconComponent} from 'angular-svg-icon';
import {VerticalSpacing} from '@components/positioning/vertical-spacing/vertical-spacing';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'listing-card',
  imports: [
    SvgIconComponent,
    VerticalSpacing,
    CurrencyPipe
  ],
  templateUrl: './listing-card.html',
  styleUrl: './listing-card.css'
})
export class ListingCard {
  @Input() listing!: Listing
}
