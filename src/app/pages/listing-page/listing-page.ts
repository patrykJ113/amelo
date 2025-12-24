import {Component, OnInit} from '@angular/core';
import {ListingService} from '@services/listing.service';
import {ActivatedRoute} from '@angular/router';
import {Listing} from '@typings/listing';
import {Picture} from '@typings/picture';
import {forkJoin} from 'rxjs';
import {Loading} from '@components/loading/loading';
import {ImageSlider} from '@components/image-slider/image-slider';
import {ListingInfoSection} from '@components/listing-info-section/listing-info-section';
import {ListingDescriptionSection} from '@components/listing-description-section/listing-description-section';

@Component({
  selector: 'listing-page',
  imports: [
    Loading,
    ImageSlider,
    ListingInfoSection,
    ListingDescriptionSection
  ],
  templateUrl: './listing-page.html',
  styleUrl: './listing-page.css'
})
export class ListingPage implements OnInit {
  listingId: string | null = null
  listing: Listing | undefined = undefined
  error: boolean = false
  loading: boolean = false
  imageUrls: string[] = []

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
        this.hideLoader()
        this.loadListingPictures(this.listing.pictures)
      },
      error: err => {
        this.error = true
        this.hideLoader()
        console.error(err)
      }
    })
  }

  loadListingPictures(pictures: Picture[]) {
    const requests = pictures.map(pic => this.listingService.getImage(this.listing!.id, pic.file_name))

    forkJoin(requests).subscribe(blobs => {
      this.imageUrls = blobs.map(blob => URL.createObjectURL(blob))
    })
  }

  showLoader() {
    this.loading = true
  }

  hideLoader() {
    this.loading = false
  }

}
