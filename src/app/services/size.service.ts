import { Injectable } from '@angular/core';
import {Size} from '@typings/size';

@Injectable({
  providedIn: 'root'
})
export class SizeService {
  isXs(size: Size) {
    return size === 'xs';
  }

  isSm(size: Size) {
    return size === 'sm';
  }

  isMd(size: Size) {
    return size === 'md';
  }

  isLg(size: Size) {
    return size === 'lg';
  }

  isXl(size: Size) {
    return size === 'xl';
  }
}
