import {Component, OnInit} from '@angular/core';
import {ListingCard} from '@components/listing-card/listing-card';
import {ListingService} from '@services/listing.service';
import {GetAllListingsResponse} from '@typings/listing';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'listings-page',
  imports: [
    ListingCard,
    RouterLink
  ],
  templateUrl: './listings-page.html',
  styleUrl: './listings-page.css'
})
export class ListingsPage implements OnInit {
  listings: GetAllListingsResponse = []
  constructor(private listingService: ListingService) {
  }

  ngOnInit() {
    this.getListings()
  }

  getListings() {
    this.listingService.getAll().subscribe({
      next: listings => {
        this.listings = listings
      },
      error: err => {
        console.log(err)
      }
    })
  }
}
