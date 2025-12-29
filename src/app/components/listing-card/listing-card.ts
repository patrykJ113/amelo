import {Component, Input, OnInit} from '@angular/core';
import {ListingListItem} from '@typings/listing';
import {VerticalSpacing} from '@components/positioning/vertical-spacing/vertical-spacing';
import {CurrencyPipe} from '@angular/common';
import {ListingService} from '@services/listing.service';
import {Router} from '@angular/router';

@Component({
  selector: 'listing-card',
  imports: [
    VerticalSpacing,
    CurrencyPipe
  ],
  templateUrl: './listing-card.html',
  styleUrl: './listing-card.css'
})
export class ListingCard implements OnInit {
  blobUrl: string = ''
  showSkeletonLoader: boolean = true
  @Input() listing!: ListingListItem

  constructor(
    private listingService: ListingService,
    private router: Router
  ) {
  }

  onKeyDown({ key }: KeyboardEvent) {
    const isEnter = key === 'Enter'
    if (isEnter) {
      this.router.navigate(['listing', this.listing.id])
    }
  }

  onLoad() {
    this.hideSkeleton()
  }

  ngOnInit() {
    if (this.listing.picture) {
      this.listingService.getImage(this.listing.id, this.listing.picture.file_name).subscribe({
        next: blob => {
          this.blobUrl = URL.createObjectURL(blob)
        },
        error: err => {
          console.error(err)
        }
      })
    }
  }

  hideSkeleton() {
    this.showSkeletonLoader = false
  }

  get listingHasPicture() {
    return this.listing.picture?.id
  }

}
