import {AfterViewChecked, Component, ElementRef, ViewChild} from '@angular/core';
import {AppButton} from '@components/app/app-button/app-button';
import {ListingForm} from '@components/listing/listing-form/listing-form';
import {VerticalSpacing} from '@components/positioning/vertical-spacing/vertical-spacing';
import {HorizontalSpacing} from '@components/positioning/horizontal-spacing/horizontal-spacing';
import {ListingRequestBody} from '@typings/listing';
import {ListingService} from '@services/listing.service';
import {Loading} from '@components/loading/loading';
import {Router} from '@angular/router';
import {RequestStatus} from '@typings/request-status';
import {Alert} from '@components/alert/alert.component';

@Component({
  selector: 'add-listing-page',
  imports: [
    AppButton,
    ListingForm,
    VerticalSpacing,
    HorizontalSpacing,
    Loading,
    Alert,
  ],
  templateUrl: './add-listing-page.html',
  styleUrl: './add-listing-page.css'
})
export class AddListingPage implements AfterViewChecked {
  requestStatus: RequestStatus = 'Not Sent'
  loading: boolean = false
  @ViewChild(ListingForm) listingForm!: ListingForm
  @ViewChild('alert', { read: ElementRef }) alert!: ElementRef

  constructor(
    private listingService: ListingService,
    private router: Router
  ) {
  }

  ngAfterViewChecked() {
    if(this.errorOccurred && this.alert) {
      const top = this.alert.nativeElement.getBoundingClientRect().top + window.scrollY;
      const offset = 150;
      window.scrollTo({ top: top - offset, behavior: 'smooth' });
    }
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
          this.requestStatus = 'Success'
        }, 1000)
      },
      error: err => {
        console.error(err)
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

  get isFormInValid() {
    if (!this.listingForm?.form) return true
    return this.listingForm.form.invalid
  }

  hideLoader() {
    this.loading = false
  }
}
