import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarItemsComponent } from './menu-bar-items.component';

describe('MenuBarItemsComponent', () => {
  let component: MenuBarItemsComponent;
  let fixture: ComponentFixture<MenuBarItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuBarItemsComponent]
    });
    fixture = TestBed.createComponent(MenuBarItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
