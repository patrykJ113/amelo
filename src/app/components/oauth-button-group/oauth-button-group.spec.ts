import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OauthButtonGroup } from './oauth-button-group';

describe('OauthButtonGroup', () => {
  let component: OauthButtonGroup;
  let fixture: ComponentFixture<OauthButtonGroup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OauthButtonGroup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OauthButtonGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
