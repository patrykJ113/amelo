import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSliderItem } from './image-slider-item';

describe('ImageSliderItem', () => {
  let component: ImageSliderItem;
  let fixture: ComponentFixture<ImageSliderItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageSliderItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageSliderItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
