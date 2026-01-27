import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthFormDialog } from './auth-form-dialog.component';

describe('AuthForm', () => {
  let component: AuthFormDialog;
  let fixture: ComponentFixture<AuthFormDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthFormDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthFormDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
