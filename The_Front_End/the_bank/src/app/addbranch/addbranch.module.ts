import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AddbranchPageRoutingModule } from './addbranch-routing.module';

import { AddbranchPage } from './addbranch.page';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AddbranchPageRoutingModule
  ],
  declarations: [AddbranchPage]
})
export class AddbranchPageModule {}
