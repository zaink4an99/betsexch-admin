import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivemarketBetsComponent } from './livemarket-bets.component';

describe('LivemarketBetsComponent', () => {
  let component: LivemarketBetsComponent;
  let fixture: ComponentFixture<LivemarketBetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LivemarketBetsComponent]
    });
    fixture = TestBed.createComponent(LivemarketBetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
