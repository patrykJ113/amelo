import {Component, ViewChild} from '@angular/core';
import {AppButton} from '@components/app/app-button/app-button';
import {ListingForm} from '@components/listing-form/listing-form';
import {VerticalSpacing} from '@components/positioning/vertical-spacing/vertical-spacing';
import {HorizontalSpacing} from '@components/positioning/horizontal-spacing/horizontal-spacing';
import {ListingRequestBody} from '@typings/listing';
import {ListingService} from '@services/listing.service';
import {Loading} from '@components/loading/loading';
import {Router} from '@angular/router';

@Component({
  selector: 'add-listing-page',
  imports: [
    AppButton,
    ListingForm,
    VerticalSpacing,
    HorizontalSpacing,
    Loading,
  ],
  templateUrl: './add-listing-page.html',
  styleUrl: './add-listing-page.css'
})
export class AddListingPage {
  loading: boolean = false
  @ViewChild(ListingForm) listingForm!: ListingForm

  constructor(
    private listingService: ListingService,
    private router: Router
  ) {
  }

  createListing() {
    if (!this.listingForm.form) return

    this.showLoader()
    const {title, description, price, category_object, files} = this.listingForm.form.value

    const newListing: ListingRequestBody = {
      title,
      description,
      price,
      category_id: category_object.id
    }

    this.listingService.create(newListing, files).subscribe({
      next: listing => {
        setTimeout(() => {
          this.listingForm.form?.reset()
          this.router.navigate(['listing', listing.id])
          this.hideLoader()
        }, 1000)
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

  get isFormInValid() {
    if (!this.listingForm?.form) return true
    return this.listingForm.form.invalid
  }

  hideLoader() {
    this.loading = false
  }
}
