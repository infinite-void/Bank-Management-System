import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcustomerPage } from './addcustomer.page';

const routes: Routes = [
  {
    path: '',
    component: AddcustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcustomerPageRoutingModule {}
