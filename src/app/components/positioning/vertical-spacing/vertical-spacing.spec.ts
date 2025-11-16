import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalSpacing } from './vertical-spacing';

describe('VerticalSpacing', () => {
  let component: VerticalSpacing;
  let fixture: ComponentFixture<VerticalSpacing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalSpacing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerticalSpacing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
