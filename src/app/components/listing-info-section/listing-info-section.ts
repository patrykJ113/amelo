import {Component, Input} from '@angular/core';
import {Listing} from '@typings/listing';
import {Panel} from '@components/panel/panel';

@Component({
  selector: 'listing-info-section',
  imports: [
    Panel
  ],
  templateUrl: './listing-info-section.html',
  styleUrl: './listing-info-section.css'
})
export class ListingInfoSection {
  @Input() listing!: Listing
}
