import {FormControl} from '@angular/forms';

export function getErrorMessage({ errors }: FormControl, label: string): string {

  if(!errors) return ''

  if (errors['noMatchingOption']) return `${label} doesn't exist`

  if (errors['minlength']) {
    const requiredMinLength = errors['minlength'].requiredLength;
    return `${label} too short (min ${requiredMinLength} characters)`;
  }

  if (errors['maxlength']) {
    const requiredMaxLength = errors['maxlength'].requiredLength;
    return `${label} too long (max ${requiredMaxLength} characters)`;
  }

  if (errors['min']) {
    const requiredMin = errors['min'].min;
    return`${label} too small (min ${requiredMin} characters)`;
  }

  if (errors['max']) {
    const requiredMax = errors['max'].max;
    return `${label} too big (max ${requiredMax} characters)`;
  }

  if(errors['emailTaken']) return `${label} is taken`

  if (errors['required']) return `${label} is required`

  if (errors['email'] || errors['password']) return `${label} is invalid`

  return ''
}
