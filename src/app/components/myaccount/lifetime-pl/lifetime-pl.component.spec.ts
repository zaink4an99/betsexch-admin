import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifetimePlComponent } from './lifetime-pl.component';

describe('LifetimePlComponent', () => {
  let component: LifetimePlComponent;
  let fixture: ComponentFixture<LifetimePlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifetimePlComponent]
    });
    fixture = TestBed.createComponent(LifetimePlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
