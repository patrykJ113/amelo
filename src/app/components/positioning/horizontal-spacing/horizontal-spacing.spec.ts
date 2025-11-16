import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalSpacing } from './horizontal-spacing';

describe('HorizontalSpacing', () => {
  let component: HorizontalSpacing;
  let fixture: ComponentFixture<HorizontalSpacing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalSpacing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorizontalSpacing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
