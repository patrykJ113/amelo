import {AbstractControl} from '@angular/forms';
import {DropdownOption} from '@typings/dropdown-option';

export function optionExistsValidator(dropDownOptions: DropdownOption[]){
  return (control: AbstractControl): null | object  => {
    const value = control.value
    const inputMatchesAllowedOption = dropDownOptions.some(
      option => option.label.toLowerCase() === value.toLowerCase()
    )

    if(inputMatchesAllowedOption) {
      return null
    }

    return {
      noMatchingOption: true
    }
  }
}
