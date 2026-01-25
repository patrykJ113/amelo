import {Component, OnInit} from '@angular/core';
import {ListingCard} from '@components/listing-card/listing-card';
import {ListingService} from '@services/listing.service';
import {GetAllListingsResponse} from '@typings/listing';
import {RouterLink} from '@angular/router';
import {Loading} from '@components/loading/loading';
import {SvgIconComponent} from 'angular-svg-icon';
import {VerticalSpacing} from '@components/positioning/vertical-spacing/vertical-spacing';
import {RequestStatus} from '@typings/request-status';
import {AppButton} from '@components/app/app-button/app-button';

@Component({
  selector: 'listings-page',
  imports: [
    ListingCard,
    RouterLink,
    Loading,
    SvgIconComponent,
    VerticalSpacing,
    AppButton,
  ],
  templateUrl: './listings-page.html',
  styleUrl: './listings-page.css'
})
export class ListingsPage implements OnInit {
  listings: GetAllListingsResponse = []
  requestStatus: RequestStatus = 'Not Sent'
  loading: boolean = false
  constructor(
    private listingService: ListingService,
  ) {
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
        this.requestStatus = 'Error'
        this.hideLoader()
      }
    })
  }

  get errorOccurred() {
    return this.requestStatus === 'Error'
  }

  showLoader() {
    this.loading = true
  }

  hideLoader() {
    this.loading = false
  }
}
