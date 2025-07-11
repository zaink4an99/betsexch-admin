import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionHistory2Component } from './transaction-history2.component';

describe('TransactionHistory2Component', () => {
  let component: TransactionHistory2Component;
  let fixture: ComponentFixture<TransactionHistory2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionHistory2Component]
    });
    fixture = TestBed.createComponent(TransactionHistory2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
