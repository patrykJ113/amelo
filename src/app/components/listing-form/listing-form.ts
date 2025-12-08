import { Component } from '@angular/core';
import {AppInput} from "@components/app/app-input/app-input";
import {AppTextarea} from "@components/app-textarea/app-textarea";
import {Combobox} from "@components/combobox/combobox";
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DropdownOption} from '@typings/dropdown-option';
import {optionExistsValidator} from '@validators/option-exists';

@Component({
  selector: 'listing-form',
    imports: [
        AppInput,
        AppTextarea,
        Combobox
    ],
  templateUrl: './listing-form.html',
  styleUrl: './listing-form.css'
})
export class ListingForm {
  listingForm: FormGroup | undefined = undefined
  carCategories: DropdownOption[] = [
    {
      id: '1',
      label: 'Audi'
    },
    {
      id: '2',
      label: 'Bmw'
    },
    {
      id: '3',
      label: 'Mercedes'
    },
    {
      id: '4',
      label: 'Volskwagen'
    },
    {
      id: '5',
      label: 'Opel'
    },
    {
      id: '6',
      label: 'Seat'
    },
    {
      id: '8',
      label: 'Ford'
    },
    {
      id: '9',
      label: 'Chevrolet'
    },
    {
      id: '10',
      label: 'Ferari'
    },
  ]

  constructor(private fb: FormBuilder) {
    this.listingForm = this.fb.group({
      title: ['', Validators.required],
      category: ['',  [optionExistsValidator(this.carCategories), Validators.required]],
      description: ['', Validators.required]
    })
  }

  getListingFormControl(controlName: string): FormControl {
    return this.listingForm?.get(controlName) as FormControl
  }
}
