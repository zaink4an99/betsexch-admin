import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldResultComponent } from './old-result.component';

describe('OldResultComponent', () => {
  let component: OldResultComponent;
  let fixture: ComponentFixture<OldResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OldResultComponent]
    });
    fixture = TestBed.createComponent(OldResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
