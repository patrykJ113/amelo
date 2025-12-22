import {Component, OnInit} from '@angular/core';
import {ListingService} from '@services/listing.service';
import {ActivatedRoute} from '@angular/router';
import {Listing} from '@typings/listing';
import {Picture} from '@typings/picture';
import {forkJoin} from 'rxjs';
import {Panel} from '@components/panel/panel';
import {VerticalSpacing} from '@components/positioning/vertical-spacing/vertical-spacing';

@Component({
  selector: 'listing-page',
  imports: [
    Panel,
    VerticalSpacing
  ],
  templateUrl: './listing-page.html',
  styleUrl: './listing-page.css'
})
export class ListingPage implements OnInit {
  listingId: string | null = null
  listing: Listing | undefined = undefined
  pictureUrls: String[] = []

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
    this.listingService.getById(listingId).subscribe({
      next: listing => {
        this.listing = listing
        this.loadListingPictures(this.listing.pictures)
        console.log(listing)
      },
      error: err => {
        console.error(err)
      }
    })
  }

  loadListingPictures(pictures: Picture[]) {
    const requests = pictures.map(pic => this.listingService.getImage(this.listing!.id, pic.file_name))

    forkJoin(requests).subscribe(blobs => {
      this.pictureUrls = blobs.map(blob => URL.createObjectURL(blob))
    })
  }

}
