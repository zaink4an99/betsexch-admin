import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSidebarComponent } from './account-sidebar.component';

describe('AccountSidebarComponent', () => {
  let component: AccountSidebarComponent;
  let fixture: ComponentFixture<AccountSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountSidebarComponent]
    });
    fixture = TestBed.createComponent(AccountSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
