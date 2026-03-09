import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListingButton } from './add-listing-button';

describe('AddListingButton', () => {
  let component: AddListingButton;
  let fixture: ComponentFixture<AddListingButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddListingButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddListingButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
