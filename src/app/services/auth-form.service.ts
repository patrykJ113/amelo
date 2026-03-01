import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {AuthFormVariant} from '@typings/auth-form-variant';

@Injectable({
  providedIn: 'root'
})
export class AuthFormService {
  private _authFormVariant = new BehaviorSubject<AuthFormVariant>('LOG_IN')
  $variantChange = this._authFormVariant.asObservable()

  set(variant: AuthFormVariant) {
    this._authFormVariant.next(variant)
  }

  get() {
    return this._authFormVariant.value
  }
}
