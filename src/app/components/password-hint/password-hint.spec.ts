import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordHint } from './password-hint';

describe('PasswordHint', () => {
  let component: PasswordHint;
  let fixture: ComponentFixture<PasswordHint>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordHint]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordHint);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
