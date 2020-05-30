import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepositinterestPageRoutingModule } from './depositinterest-routing.module';

import { DepositinterestPage } from './depositinterest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepositinterestPageRoutingModule
  ],
  declarations: [DepositinterestPage]
})
export class DepositinterestPageModule {}
