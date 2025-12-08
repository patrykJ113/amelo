import {Component, OnInit} from '@angular/core';
import {AppInput} from "@components/app/app-input/app-input";
import {AppTextarea} from "@components/app-textarea/app-textarea";
import {Combobox} from "@components/combobox/combobox";
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DropdownOption} from '@typings/dropdown-option';
import {optionExistsValidator} from '@validators/option-exists';
import {CategoryService} from '@services/category.service';
import {Loading} from '@components/loading/loading';
import {NgIf} from '@angular/common';

@Component({
  selector: 'listing-form',
  imports: [
    AppInput,
    AppTextarea,
    Combobox,
    Loading,
  ],
  templateUrl: './listing-form.html',
  styleUrl: './listing-form.css'
})
export class ListingForm implements OnInit {
  form: FormGroup | undefined = undefined
  carCategories: DropdownOption[] = []
  loading: boolean = true

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService
  ) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      category: ['', [optionExistsValidator(this.carCategories), Validators.required]],
      price: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.getCategories()
  }

  getCategories() {
    this.categoryService.getAll().subscribe({
      next: categoryies => {
        categoryies.forEach(categorie => {
          this.carCategories.push({
            id: categorie.id,
            label: this.capitalize(categorie.name)
          })
        })
        this.hideLoader()
      },
      error: err => {
        this.hideLoader()
        console.error(err)
      }
    })
  }

  hideLoader() {
    this.loading = false
  }

  capitalize(str: string) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase()
  }

  getListingFormControl(controlName: string): FormControl {
    return this.form?.get(controlName) as FormControl
  }
}
