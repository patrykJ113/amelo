import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDescriptionSection } from './listing-description-section';

describe('ListingDescriptionSection', () => {
  let component: ListingDescriptionSection;
  let fixture: ComponentFixture<ListingDescriptionSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListingDescriptionSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingDescriptionSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
