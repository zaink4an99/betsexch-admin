import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportSettingComponent } from './sport-setting.component';

describe('SportSettingComponent', () => {
  let component: SportSettingComponent;
  let fixture: ComponentFixture<SportSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportSettingComponent]
    });
    fixture = TestBed.createComponent(SportSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
