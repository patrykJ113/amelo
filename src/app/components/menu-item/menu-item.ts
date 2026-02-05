import {Component, Input} from '@angular/core';
import {SvgIconComponent} from 'angular-svg-icon';
import {HorizontalSpacing} from '@components/positioning/horizontal-spacing/horizontal-spacing';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'menu-item',
  imports: [
    SvgIconComponent,
    HorizontalSpacing,
    RouterLink
  ],
  templateUrl: './menu-item.html',
  styleUrl: './menu-item.css'
})
export class MenuItem {
  @Input() svgSrc: string = ''
  @Input() text: string = ''
  @Input() url: string = ''
  @Input() onSelectItemCallBack: (() => void) | undefined = undefined

  constructor(private router: Router) {
  }

  get src() {
    return `${this.svgSrc}.svg`
  }

  useCallBackOrNavigate() {
    this.onSelectItemCallBack?.() || this.router.navigate([this.url])
  }

  onClick() {
    this.useCallBackOrNavigate()
  }

  onEnterKeyDown() {
    this.useCallBackOrNavigate()
  }
}
