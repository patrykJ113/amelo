import {Component, Input, OnInit} from '@angular/core';
import {Listing, ListingListItem} from '@typings/listing';
import {SvgIconComponent} from 'angular-svg-icon';
import {VerticalSpacing} from '@components/positioning/vertical-spacing/vertical-spacing';
import {CurrencyPipe} from '@angular/common';
import {ListingService} from '@services/listing.service';

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
export class ListingCard implements OnInit {
  url: string = ''
  @Input() listing!: ListingListItem

  constructor(private listingService: ListingService) {
  }

  ngOnInit() {
    if (this.listing.picture) {
      this.listingService.getImage(this.listing.id, this.listing.picture.file_name).subscribe({
        next: blob => {
          this.url = URL.createObjectURL(blob)
        },
        error: err => {
          console.error(err)
        }
      })
    }
  }

}
