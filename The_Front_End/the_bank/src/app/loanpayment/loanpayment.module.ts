import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanpaymentPageRoutingModule } from './loanpayment-routing.module';

import { LoanpaymentPage } from './loanpayment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanpaymentPageRoutingModule
  ],
  declarations: [LoanpaymentPage]
})
export class LoanpaymentPageModule {}
