import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoanpaymentPage } from './loanpayment.page';

describe('LoanpaymentPage', () => {
  let component: LoanpaymentPage;
  let fixture: ComponentFixture<LoanpaymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanpaymentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoanpaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
