import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitMarketComponent } from './profit-market.component';

describe('ProfitMarketComponent', () => {
  let component: ProfitMarketComponent;
  let fixture: ComponentFixture<ProfitMarketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfitMarketComponent]
    });
    fixture = TestBed.createComponent(ProfitMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
