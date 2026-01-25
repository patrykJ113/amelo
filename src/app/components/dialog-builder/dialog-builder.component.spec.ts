import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBuilder } from './dialog-builder.component';

describe('Dialog', () => {
  let component: DialogBuilder;
  let fixture: ComponentFixture<DialogBuilder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogBuilder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
