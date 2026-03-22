import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {Logo} from '@components/logo/logo';
import {AvatarDropdown} from '@components/avatar-dropdown/avatar-dropdown';
import {AppButton} from '@components/app/app-button/app-button';
import {HorizontalSpacing} from '@components/positioning/horizontal-spacing/horizontal-spacing';
import {AuthService} from '@services/auth.service';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {filter} from 'rxjs';

@Component({
  selector: 'app-nav',
  imports: [
    Logo,
    AvatarDropdown,
    AppButton,
    HorizontalSpacing,
    RouterLink
  ],
  templateUrl: './app-nav.html',
  styleUrl: './app-nav.css'
})
export class AppNav implements AfterViewInit {
  @ViewChild('navLink0') navLink0!: ElementRef<HTMLAnchorElement>;
  @ViewChild('navLink1') navLink1!: ElementRef<HTMLAnchorElement>;
  @ViewChild('navPillContainer') navPillContainer!: ElementRef<HTMLDivElement>;

  pillLeft = 0;
  pillWidth = 0;
  activeIndex = 0;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => {
      this.setActiveIndex();
      this.movePillTo(this.activeIndex);
    });
  }

  ngAfterViewInit() {
    this.setActiveIndex();
    setTimeout(() => this.movePillTo(this.activeIndex));
  }

  setActiveIndex() {
    this.activeIndex = this.router.url.includes('listing/add') ? 0 : 1;
  }

  movePillTo(index: number) {
    const el = index === 0 ? this.navLink0 : this.navLink1;
    if (!el || !this.navPillContainer) return;
    const elRect = el.nativeElement.getBoundingClientRect();
    const containerRect = this.navPillContainer.nativeElement.getBoundingClientRect();
    this.pillLeft = elRect.left - containerRect.left;
    this.pillWidth = elRect.width;
  }

  onNavHover(index: number) {
    this.movePillTo(index);
  }

  onNavLeave() {
    this.movePillTo(this.activeIndex);
  }

  goToLogin() {
    this.router.navigate(['/auth/login'])
  }

  goToRegister() {
    this.router.navigate(['/auth/register'])
  }

  get isLoggedIn() {
    return this.authService.isLoggedIn()
  }
}
