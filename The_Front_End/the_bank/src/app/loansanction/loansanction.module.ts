import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoansanctionPageRoutingModule } from './loansanction-routing.module';

import { LoansanctionPage } from './loansanction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoansanctionPageRoutingModule
  ],
  declarations: [LoansanctionPage]
})
export class LoansanctionPageModule {}
