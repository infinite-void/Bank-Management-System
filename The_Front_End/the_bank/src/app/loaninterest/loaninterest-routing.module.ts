import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoaninterestPage } from './loaninterest.page';

const routes: Routes = [
  {
    path: '',
    component: LoaninterestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoaninterestPageRoutingModule {}
