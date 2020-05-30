import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoansanctionPage } from './loansanction.page';

const routes: Routes = [
  {
    path: '',
    component: LoansanctionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoansanctionPageRoutingModule {}
