import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OauthButton } from './oauth-button';

describe('OauthButton', () => {
  let component: OauthButton;
  let fixture: ComponentFixture<OauthButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OauthButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OauthButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
