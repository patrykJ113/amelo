import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavGoToPageButton } from './go-to-page-button.component';

describe('NavButton', () => {
  let component: NavGoToPageButton;
  let fixture: ComponentFixture<NavGoToPageButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavGoToPageButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavGoToPageButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
