import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanServicingComponent } from './loan-servicing.component';

describe('LoanServicingComponent', () => {
  let component: LoanServicingComponent;
  let fixture: ComponentFixture<LoanServicingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanServicingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanServicingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
