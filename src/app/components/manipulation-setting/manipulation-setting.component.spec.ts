import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManipulationSettingComponent } from './manipulation-setting.component';

describe('ManipulationSettingComponent', () => {
  let component: ManipulationSettingComponent;
  let fixture: ComponentFixture<ManipulationSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManipulationSettingComponent]
    });
    fixture = TestBed.createComponent(ManipulationSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
