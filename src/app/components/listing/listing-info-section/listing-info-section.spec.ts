import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingInfoSection } from './listing-info-section';

describe('ListingInfoSection', () => {
  let component: ListingInfoSection;
  let fixture: ComponentFixture<ListingInfoSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingInfoSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingInfoSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
