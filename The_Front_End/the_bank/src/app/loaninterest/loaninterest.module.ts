import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoaninterestPageRoutingModule } from './loaninterest-routing.module';

import { LoaninterestPage } from './loaninterest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoaninterestPageRoutingModule
  ],
  declarations: [LoaninterestPage]
})
export class LoaninterestPageModule {}
