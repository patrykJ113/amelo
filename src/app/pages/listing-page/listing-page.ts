import {Component, OnInit} from '@angular/core';
import {ListingService} from '@services/listing.service';
import {ActivatedRoute} from '@angular/router';
import {Listing} from '@typings/listing';
import {Picture} from '@typings/picture';
import {forkJoin} from 'rxjs';
import {Loading} from '@components/loading/loading';
import {ImageSlider} from '@components/image/image-slider/image-slider';
import {ListingInfoSection} from '@components/listing/listing-info-section/listing-info-section';
import {ListingDescriptionSection} from '@components/listing/listing-description-section/listing-description-section';
import {SvgIconComponent} from 'angular-svg-icon';
import {AppButton} from '@components/app/app-button/app-button';

@Component({
  selector: 'listing-page',
  imports: [
    Loading,
    ImageSlider,
    ListingInfoSection,
    ListingDescriptionSection,
    SvgIconComponent,
    AppButton,
  ],
  templateUrl: './listing-page.html',
  styleUrl: './listing-page.css'
})
export class ListingPage implements OnInit {
  listingId: string | null = null
  listing: Listing | undefined = undefined
  loading: boolean = false
  imageUrls: string[] = []
  errorType: 'not-found' | 'server-error' | null = null

  constructor(
    private listingService: ListingService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.listingId = this.route.snapshot.paramMap.get('id')
    if (this.listingId) this.loadListing(this.listingId)
  }

  loadListing(listingId: string) {
    this.showLoader()
    this.listingService.getById(listingId).subscribe({
      next: listing => {
        this.listing = listing
        this.listing.pictures.length ? this.loadListingPictures(this.listing.pictures) : this.hideLoader()
      },
      error: err => {
        this.hideLoader()
        this.errorType = err.status === 404 ? 'not-found' : 'server-error'
        console.error(err)
      }
    })
  }

  loadListingPictures(pictures: Picture[]) {
    const requests = pictures.map(pic => this.listingService.getImage(this.listing!.id, pic.file_name))

    forkJoin(requests).subscribe(blobs => {
      this.imageUrls = blobs.map(blob => URL.createObjectURL(blob))
      this.hideLoader()
    })
  }

  showLoader() {
    this.loading = true
  }

  hideLoader() {
    this.loading = false
  }

  get isNotFound() {
    return this.errorType === 'not-found'
  }

  get isServerError() {
    return this.errorType === 'server-error'
  }

  retry() {
    this.errorType = null
    if (this.listingId) this.loadListing(this.listingId)
  }
}