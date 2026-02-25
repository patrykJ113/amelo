import {AbstractControl, ValidationErrors} from '@angular/forms';

export function passwordValidator(control: AbstractControl): null | ValidationErrors {
  const value = control.value
  if (!value) return null
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=\+\[\]{};:,.<>?/\\|~`]).{8,20}$/;

  return regex.test(value) ? null : { password: true };

}
