import {Component, ElementRef, OnInit, signal, ViewChild} from '@angular/core';
import {ListingForm} from '@components/listing/listing-form/listing-form';
import {VerticalSpacing} from '@components/positioning/vertical-spacing/vertical-spacing';
import {HorizontalSpacing} from '@components/positioning/horizontal-spacing/horizontal-spacing';
import {ListingRequestBody} from '@typings/listing';
import {ListingService} from '@services/listing.service';
import {Router} from '@angular/router';
import {RequestStatus} from '@typings/request-status';
import {AuthService} from '@services/auth.service';
import {AddListingButton} from '@components/add-listing-button/add-listing-button';
import {Alert} from '@components/alert/alert';
import {from, of, switchMap, concatMap, toArray} from 'rxjs';

@Component({
  selector: 'add-listing-page',
  imports: [
    ListingForm,
    VerticalSpacing,
    HorizontalSpacing,
    AddListingButton,
    Alert,
  ],
  templateUrl: './add-listing-page.html',
  styleUrl: './add-listing-page.css'
})
export class AddListingPage implements OnInit {
  requestStatus: RequestStatus = 'Not Sent'
  loading: boolean = false
  userId: string | undefined
  errorMessage: string = ''
  showError = signal(false)
  @ViewChild(ListingForm) listingForm!: ListingForm
  @ViewChild('alert', {read: ElementRef}) alert!: ElementRef

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
    const {title, description, price, sub_category} = this.listingForm.form.value

    const newListing: ListingRequestBody = {
      title,
      description,
      price,
      category_id: sub_category.id
    }

    const files: File[] = Array.from(this.listingForm.form.value.files ?? [])

    this.listingService.create(newListing).pipe(
      switchMap(listing => {
        if (!files.length) return of(listing)
        return from(files).pipe(
          concatMap(file => this.listingService.uploadImage(listing.id, file)),
          toArray(),
          switchMap(() => of(listing))
        )
      })
    ).subscribe({
      next: listing => {
        this.listingForm.form?.reset()
        this.router.navigate(['listing', listing.id])
        this.hideLoader()
        this.requestStatus = 'Success'
      },
      error: err => {
        console.error(err)
        this.requestStatus = 'Error'
        this.errorMessage = 'An error occurred while creating the listing'
        this.showError.set(true)
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
