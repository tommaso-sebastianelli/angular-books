import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDialogComponent } from './loan-dialog.component';

describe('LoanDialogComponent', () => {
  let component: LoanDialogComponent;
  let fixture: ComponentFixture<LoanDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanDialogComponent ]
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
