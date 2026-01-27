import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerWithText } from './divider-with-text';

describe('DividerWithText', () => {
  let component: DividerWithText;
  let fixture: ComponentFixture<DividerWithText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DividerWithText]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DividerWithText);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
