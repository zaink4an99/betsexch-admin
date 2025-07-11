import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPnlComponent } from './user-pnl.component';

describe('UserPnlComponent', () => {
  let component: UserPnlComponent;
  let fixture: ComponentFixture<UserPnlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserPnlComponent]
    });
    fixture = TestBed.createComponent(UserPnlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
