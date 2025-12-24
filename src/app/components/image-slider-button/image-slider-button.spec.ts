import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSliderButton } from './image-slider-button';

describe('ImageSliderButton', () => {
  let component: ImageSliderButton;
  let fixture: ComponentFixture<ImageSliderButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageSliderButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageSliderButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
