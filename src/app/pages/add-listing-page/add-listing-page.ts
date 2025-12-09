import {Component, ViewChild} from '@angular/core';
import {AppButton} from '@components/app/app-button/app-button';
import {ListingForm} from '@components/listing-form/listing-form';
import {SvgIconComponent} from 'angular-svg-icon';
import {VerticalSpacing} from '@components/positioning/vertical-spacing/vertical-spacing';
import {HorizontalSpacing} from '@components/positioning/horizontal-spacing/horizontal-spacing';
import {ListingRequestBody} from '@typings/listing';
import {ListingService} from '@services/listing.service';
import {Loading} from '@components/loading/loading';

@Component({
  selector: 'add-listing-page',
  imports: [
    AppButton,
    ListingForm,
    SvgIconComponent,
    VerticalSpacing,
    HorizontalSpacing,
    Loading
  ],
  templateUrl: './add-listing-page.html',
  styleUrl: './add-listing-page.css'
})
export class AddListingPage {
  loading: boolean = false
  @ViewChild(ListingForm) listingForm!: ListingForm

  constructor(private listingService: ListingService) {
  }

  createListing() {
    if (!this.listingForm.form) return

    this.showLoader()
    const {title, description, price, category_object} = this.listingForm.form.value

    const newListing: ListingRequestBody = {
      title,
      description,
      price,
      category_id: category_object.id
    }

    this.listingService.create(newListing).subscribe({
      next: category => {
        this.hideLoader()
        console.log(category)
      },
      error: err => {
        console.error(err)
        this.hideLoader()
      }
    })
  }

  showLoader() {
    this.loading = true
  }

  hideLoader() {
    this.loading = false
  }
}
