import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcurrentUsersComponent } from './concurrent-users.component';

describe('ConcurrentUsersComponent', () => {
  let component: ConcurrentUsersComponent;
  let fixture: ComponentFixture<ConcurrentUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConcurrentUsersComponent]
    });
    fixture = TestBed.createComponent(ConcurrentUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
