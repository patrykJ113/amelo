import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSlot } from './image-slot';

describe('ImageSlot', () => {
  let component: ImageSlot;
  let fixture: ComponentFixture<ImageSlot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageSlot]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageSlot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
