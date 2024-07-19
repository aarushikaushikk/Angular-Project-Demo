import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanServicingDetailsComponent } from './loan-servicing-details.component';

describe('LoanServicingDetailsComponent', () => {
  let component: LoanServicingDetailsComponent;
  let fixture: ComponentFixture<LoanServicingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanServicingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanServicingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
