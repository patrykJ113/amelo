import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AppInput} from "@components/app/app-input/app-input";
import {AppTextarea} from "@components/app/app-textarea/app-textarea";
import {Combobox} from "@components/combobox/combobox";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {DropdownOption} from '@typings/dropdown-option';
import {CategoryService} from '@services/category.service';
import {Panel} from '@components/panel/panel';
import {VerticalSpacing} from '@components/positioning/vertical-spacing/vertical-spacing';
import {ImagePicker} from '@components/image/image-picker/image-picker';
import {getFormControl} from '@helpers/get-form-control';
import {Category} from '@typings/category';

@Component({
  selector: 'listing-form',
  imports: [
    AppInput,
    AppTextarea,
    Combobox,
    ReactiveFormsModule,
    Panel,
    VerticalSpacing,
    ImagePicker,
  ],
  templateUrl: './listing-form.html',
  styleUrl: './listing-form.css'
})
export class ListingForm implements OnInit, AfterViewInit {
  form: FormGroup
  allCategories: Category[] = []
  primaryCategories: DropdownOption[] = []
  subCategories: DropdownOption[] = []
  loading: boolean = true
  private activePrimaryId: string | null = null

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService
  ) {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(200)]],
      category: [null, [Validators.required]],
      sub_category: [null, [Validators.required]],
      price: ['', [Validators.required, Validators.min(0), Validators.max(10000000)]],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(2000)]],
      files: [null]
    })
  }

  ngOnInit() {
    this.getCategories()
    this.watchPrimaryCategory()
  }

  ngAfterViewInit() {
    this.getControl('sub_category').disable()
  }

  getCategories() {
    this.categoryService.getAll().subscribe({
      next: categories => {
        this.allCategories = categories
        categories
          .filter(c => c.primary_id === null)
          .forEach(c => this.primaryCategories.push({ id: c.id, label: this.capitalize(c.name) }))
        this.hideLoader()
      },
      error: err => {
        this.hideLoader()
        console.error(err)
      }
    })
  }

  watchPrimaryCategory() {
    this.getControl('category').valueChanges.subscribe((value: DropdownOption | null) => {
      value?.id ? this.onPrimarySelected(value.id) : this.onPrimaryCleared()
    })
  }

  onPrimarySelected(primaryId: string) {
    if (this.activePrimaryId === primaryId) return
    this.activePrimaryId = primaryId

    this.subCategories = this.allCategories
      .filter(c => c.primary_id === primaryId)
      .map(c => ({ id: c.id, label: this.capitalize(c.name) }))

    const subControl = this.getControl('sub_category')
    subControl.enable()
    subControl.setValue(null)
  }

  onPrimaryCleared() {
    this.activePrimaryId = null
    this.subCategories = []
    const subControl = this.getControl('sub_category')
    subControl.setValue(null)
    subControl.disable()
  }

  hideLoader() {
    this.loading = false
  }

  capitalize(str: string) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase()
  }

  getControl(controlName: string): FormControl {
    return getFormControl(this.form, controlName)
  }
}
