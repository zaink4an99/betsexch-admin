import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasinoRiskmanagementComponent } from './casino-riskmanagement.component';

describe('CasinoRiskmanagementComponent', () => {
  let component: CasinoRiskmanagementComponent;
  let fixture: ComponentFixture<CasinoRiskmanagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasinoRiskmanagementComponent]
    });
    fixture = TestBed.createComponent(CasinoRiskmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
