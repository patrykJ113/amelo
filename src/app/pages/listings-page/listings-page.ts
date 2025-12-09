import {Component, OnInit} from '@angular/core';
import {ListingCard} from '@components/listing-card/listing-card';
import {ListingService} from '@services/listing.service';
import {Listing} from '@typings/listing';

@Component({
  selector: 'listings-page',
  imports: [
    ListingCard
  ],
  templateUrl: './listings-page.html',
  styleUrl: './listings-page.css'
})
export class ListingsPage implements OnInit {
  listings: Listing[] = []
  constructor(private listingService: ListingService) {
  }

  ngOnInit() {
    this.getListings()
  }

  getListings() {
    this.listingService.getAll().subscribe({
      next: listings => {
        this.listings = listings
        console.log(listings)
      },
      error: err => {
        console.log(err)
      }
    })
  }
}
