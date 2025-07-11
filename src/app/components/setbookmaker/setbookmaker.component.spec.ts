import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetbookmakerComponent } from './setbookmaker.component';

describe('SetbookmakerComponent', () => {
  let component: SetbookmakerComponent;
  let fixture: ComponentFixture<SetbookmakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetbookmakerComponent]
    });
    fixture = TestBed.createComponent(SetbookmakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
