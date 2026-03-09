import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AppButton} from '@components/app/app-button/app-button';
import {ListingForm} from '@components/listing/listing-form/listing-form';
import {VerticalSpacing} from '@components/positioning/vertical-spacing/vertical-spacing';
import {HorizontalSpacing} from '@components/positioning/horizontal-spacing/horizontal-spacing';
import {ListingRequestBody} from '@typings/listing';
import {ListingService} from '@services/listing.service';
import {Router} from '@angular/router';
import {RequestStatus} from '@typings/request-status';
import {AuthService} from '@services/auth.service';
import {Tooltip} from '@components/show-on-hover/tooltip.component';
import {AddListingButton} from '@components/add-listing-button/add-listing-button';

@Component({
  selector: 'add-listing-page',
  imports: [
    AppButton,
    ListingForm,
    VerticalSpacing,
    HorizontalSpacing,
    Tooltip,
    AddListingButton,
  ],
  templateUrl: './add-listing-page.html',
  styleUrl: './add-listing-page.css'
})
export class AddListingPage implements OnInit {
  requestStatus: RequestStatus = 'Not Sent'
  loading: boolean = false
  userId: string | undefined
  @ViewChild(ListingForm) listingForm!: ListingForm
  @ViewChild('alert', { read: ElementRef }) alert!: ElementRef

  constructor(
    private listingService: ListingService,
    private router: Router,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
    this.userId = this.authService.getUserIdFromToken()
  }

  createListing() {
    if (!this.listingForm.form || this.loading) return

    this.showLoader()
    const {title, description, price, category_object, files} = this.listingForm.form.value

    const newListing: ListingRequestBody = {
      title,
      description,
      price,
      category_id: category_object.id
    }

    if(!this.userId) return;

    this.listingService.create(newListing, files, this.userId).subscribe({
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
