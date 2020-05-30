import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddemployeePage } from './addemployee.page';

const routes: Routes = [
  {
    path: '',
    component: AddemployeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddemployeePageRoutingModule {}
