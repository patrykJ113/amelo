import {Component, OnInit} from '@angular/core';
import {ListingCard} from '@components/listing/listing-card/listing-card';
import {ListingService} from '@services/listing.service';
import {GetAllListingsResponse} from '@typings/listing';
import {RouterLink} from '@angular/router';
import {Loading} from '@components/loading/loading';
import {RequestStatus} from '@typings/request-status';
import {AuthFormDialog} from '@components/auth-form-dialog/auth-form-dialog.component';
import {NotFoundError} from '@components/not-found-error/not-found-error';
import {ServerError} from '@components/server-error/server-error';

@Component({
  selector: 'listings-page',
  imports: [
    ListingCard,
    RouterLink,
    Loading,
    AuthFormDialog,
    NotFoundError,
    ServerError,
  ],
  templateUrl: './listings-page.html',
  styleUrl: './listings-page.css',
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

  retry = () => {
    this.requestStatus = 'Not Sent'
    this.getListings()
  }

  showLoader() {
    this.loading = true
  }

  hideLoader() {
    this.loading = false
  }
}
