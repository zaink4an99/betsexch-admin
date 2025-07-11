import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetlimitComponent } from './setlimit.component';

describe('SetlimitComponent', () => {
  let component: SetlimitComponent;
  let fixture: ComponentFixture<SetlimitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetlimitComponent]
    });
    fixture = TestBed.createComponent(SetlimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
