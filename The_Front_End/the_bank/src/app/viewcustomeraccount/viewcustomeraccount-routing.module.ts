import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewcustomeraccountPage } from './viewcustomeraccount.page';

const routes: Routes = [
  {
    path: '',
    component: ViewcustomeraccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewcustomeraccountPageRoutingModule {}
