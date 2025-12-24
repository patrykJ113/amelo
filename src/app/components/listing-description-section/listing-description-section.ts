import {Component, Input} from '@angular/core';
import {Panel} from '@components/panel/panel';
import {Listing} from '@typings/listing';

@Component({
  selector: 'listing-description-section',
  imports: [
    Panel
  ],
  templateUrl: './listing-description-section.html',
  styleUrl: './listing-description-section.css'
})
export class ListingDescriptionSection {
  @Input() listing!: Listing
}
