import {ElementRef, Injectable} from '@angular/core';
import {BoundingClientRect} from '@typings/position';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  get viewportSize() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  elementSize(el: ElementRef): BoundingClientRect {
    const bcr = el.nativeElement.getBoundingClientRect()
    return {
      top: bcr.top,
      bottom: bcr.bottom,
      left: bcr.left,
      right: bcr.right,
      width: bcr.width,
      height: bcr.height,
    }
  }
}
