import { ComponentFixture, TestBed } from '@angular/core/testing';

import { P2pSettingComponent } from './p2p-setting.component';

describe('P2pSettingComponent', () => {
  let component: P2pSettingComponent;
  let fixture: ComponentFixture<P2pSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [P2pSettingComponent]
    });
    fixture = TestBed.createComponent(P2pSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
