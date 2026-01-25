import {BehaviorSubject} from 'rxjs';

export class DialogService {
  private _isOpen = new BehaviorSubject<boolean>(false)
  visible$ = this._isOpen.asObservable()

  open() {
    this._isOpen.next(true)
  }

  close() {
    this._isOpen.next(false)
  }

  isOpen() {
    return this._isOpen.value
  }
}
