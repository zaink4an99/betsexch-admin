import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAcsummaryComponent } from './member-acsummary.component';

describe('MemberAcsummaryComponent', () => {
  let component: MemberAcsummaryComponent;
  let fixture: ComponentFixture<MemberAcsummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemberAcsummaryComponent]
    });
    fixture = TestBed.createComponent(MemberAcsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
