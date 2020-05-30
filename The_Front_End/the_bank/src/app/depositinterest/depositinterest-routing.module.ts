import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepositinterestPage } from './depositinterest.page';

const routes: Routes = [
  {
    path: '',
    component: DepositinterestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepositinterestPageRoutingModule {}
