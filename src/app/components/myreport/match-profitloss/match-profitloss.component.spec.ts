import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchProfitlossComponent } from './match-profitloss.component';

describe('MatchProfitlossComponent', () => {
  let component: MatchProfitlossComponent;
  let fixture: ComponentFixture<MatchProfitlossComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchProfitlossComponent]
    });
    fixture = TestBed.createComponent(MatchProfitlossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
