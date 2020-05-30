import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddemployeePageRoutingModule } from './addemployee-routing.module';

import { AddemployeePage } from './addemployee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddemployeePageRoutingModule
  ],
  declarations: [AddemployeePage]
})
export class AddemployeePageModule {}
