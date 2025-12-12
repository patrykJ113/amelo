import {FormControl} from '@angular/forms';

export function getErrorMessage({ errors }: FormControl, label: string): string {
  let errorMsg = ''

  if (errors?.['noMatchingOption']) {
    errorMsg = `${label} doesn't exist`;
  }

  if (errors?.['minlength']) {
    const requiredMinLength = errors['minlength'].requiredLength;
    errorMsg = `${label} too short (min ${requiredMinLength} characters)`;
  }

  if (errors?.['maxlength']) {
    const requiredMaxLength = errors['maxlength'].requiredLength;
    errorMsg = `${label} too long (max ${requiredMaxLength} characters)`;
  }

  if (errors?.['min']) {
    const requiredMin = errors['min'].min;
    errorMsg = `${label} too small (min ${requiredMin} characters)`;
  }

  if (errors?.['max']) {
    const requiredMax = errors['max'].max;
    errorMsg = `${label} too big (max ${requiredMax} characters)`;
  }

  if (errors?.['required']) {
    errorMsg = `${label} is required`;
  }


  return errorMsg
}
