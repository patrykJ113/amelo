import {FormControl} from '@angular/forms';

export function getErrorMessage({ errors }: FormControl, label: string): string {
  let errorMsg = ''

  if(errors?.['noMatchingOption']) {
    errorMsg = `${label} doesn’t exist`
  }

  if(errors?.['required']) {
    errorMsg = `${label} is required`
  }

  return errorMsg
}
