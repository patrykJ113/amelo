import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordHints } from './password-hints';

describe('PasswordHints', () => {
  let component: PasswordHints;
  let fixture: ComponentFixture<PasswordHints>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordHints]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordHints);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
