import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanpaymentPage } from './loanpayment.page';

const routes: Routes = [
  {
    path: '',
    component: LoanpaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanpaymentPageRoutingModule {}
