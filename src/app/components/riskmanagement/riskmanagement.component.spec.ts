import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskmanagementComponent } from './riskmanagement.component';

describe('RiskmanagementComponent', () => {
  let component: RiskmanagementComponent;
  let fixture: ComponentFixture<RiskmanagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RiskmanagementComponent]
    });
    fixture = TestBed.createComponent(RiskmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
