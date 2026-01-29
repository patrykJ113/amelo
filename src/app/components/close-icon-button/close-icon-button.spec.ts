import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseIconButton } from './close-icon-button';

describe('CloseIconButton', () => {
  let component: CloseIconButton;
  let fixture: ComponentFixture<CloseIconButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CloseIconButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloseIconButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
