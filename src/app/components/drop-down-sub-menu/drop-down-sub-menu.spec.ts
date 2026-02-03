import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownSubMenu } from './drop-down-sub-menu';

describe('DropDownSubMenu', () => {
  let component: DropDownSubMenu;
  let fixture: ComponentFixture<DropDownSubMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropDownSubMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropDownSubMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
