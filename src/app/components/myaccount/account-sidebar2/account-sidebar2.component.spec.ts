import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSidebar2Component } from './account-sidebar2.component';

describe('AccountSidebar2Component', () => {
  let component: AccountSidebar2Component;
  let fixture: ComponentFixture<AccountSidebar2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountSidebar2Component]
    });
    fixture = TestBed.createComponent(AccountSidebar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
