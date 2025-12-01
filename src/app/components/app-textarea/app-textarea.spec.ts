import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTextarea } from './app-textarea';

describe('AppTextarea', () => {
  let component: AppTextarea;
  let fixture: ComponentFixture<AppTextarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppTextarea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppTextarea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
