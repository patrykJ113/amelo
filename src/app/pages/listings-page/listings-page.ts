import {Component, OnInit} from '@angular/core';
import {ListingCard} from '@components/listing-card/listing-card';
import {ListingService} from '@services/listing.service';
import {GetAllListingsResponse} from '@typings/listing';
import {RouterLink} from '@angular/router';
import {Loading} from '@components/loading/loading';

@Component({
  selector: 'listings-page',
  imports: [
    ListingCard,
    RouterLink,
    Loading
  ],
  templateUrl: './listings-page.html',
  styleUrl: './listings-page.css'
})
export class ListingsPage implements OnInit {
  listings: GetAllListingsResponse = []
  loading: boolean = false
  constructor(private listingService: ListingService) {
  }

  ngOnInit() {
    this.getListings()
  }

  getListings() {
    this.showLoader()
    this.listingService.getAll().subscribe({
      next: listings => {
        this.listings = listings
        this.hideLoader()
      },
      error: err => {
        console.log(err)
        this.hideLoader()
      }
    })
  }

  showLoader() {
    this.loading = true
  }

  hideLoader() {
    setTimeout(() => {
      this.loading = false
    }, 3000)
  }
}
