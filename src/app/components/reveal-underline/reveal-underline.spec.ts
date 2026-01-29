import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevealUnderline } from './reveal-underline';

describe('RevealUnderline', () => {
  let component: RevealUnderline;
  let fixture: ComponentFixture<RevealUnderline>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevealUnderline]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevealUnderline);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
