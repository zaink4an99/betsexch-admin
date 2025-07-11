import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetlistLiveComponent } from './betlist-live.component';

describe('BetlistLiveComponent', () => {
  let component: BetlistLiveComponent;
  let fixture: ComponentFixture<BetlistLiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BetlistLiveComponent]
    });
    fixture = TestBed.createComponent(BetlistLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
