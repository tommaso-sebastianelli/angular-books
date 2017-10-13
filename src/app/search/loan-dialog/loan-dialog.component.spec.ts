import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDialogComponent } from './loan-dialog.component';

import { MatSlider, MatChip, MatDialog, MatSpinner, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { HttpThrottlerService } from '../../shared/http-throttler/http-throttler.service';
import { LoansService } from '../../loans/loans.service';


class MatDialogRefMock {
}

describe('LoanDialogComponent', () => {
  let component: LoanDialogComponent;
  let fixture: ComponentFixture<LoanDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        MatSlider, 
        MatChip, 
        MatDialog, 
        MatSpinner
      ],
      declarations: [ LoanDialogComponent ],
      providers: [
        { provide: MatDialogRef, useClass: MatDialogRefMock },
        LoansService,
        HttpThrottlerService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
