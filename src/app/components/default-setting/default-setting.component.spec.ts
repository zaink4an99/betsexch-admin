import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultSettingComponent } from './default-setting.component';

describe('DefaultSettingComponent', () => {
  let component: DefaultSettingComponent;
  let fixture: ComponentFixture<DefaultSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DefaultSettingComponent]
    });
    fixture = TestBed.createComponent(DefaultSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
