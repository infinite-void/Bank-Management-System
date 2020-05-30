import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'addbranch',
    loadChildren: () => import('./addbranch/addbranch.module').then( m => m.AddbranchPageModule)
  },
  {
    path: 'addemployee',
    loadChildren: () => import('./addemployee/addemployee.module').then( m => m.AddemployeePageModule)
  },
  {
    path: 'addcustomer',
    loadChildren: () => import('./addcustomer/addcustomer.module').then( m => m.AddcustomerPageModule)
  },
  {
    path: 'transaction',
    loadChildren: () => import('./transaction/transaction.module').then( m => m.TransactionPageModule)
  },
  {
    path: 'loansanction',
    loadChildren: () => import('./loansanction/loansanction.module').then( m => m.LoansanctionPageModule)
  },
  {
    path: 'loanpayment',
    loadChildren: () => import('./loanpayment/loanpayment.module').then( m => m.LoanpaymentPageModule)
  },
  {
    path: 'addaccount',
    loadChildren: () => import('./addaccount/addaccount.module').then( m => m.AddaccountPageModule)
  },
  {
    path: 'depositinterest',
    loadChildren: () => import('./depositinterest/depositinterest.module').then( m => m.DepositinterestPageModule)
  },
  {
    path: 'loaninterest',
    loadChildren: () => import('./loaninterest/loaninterest.module').then( m => m.LoaninterestPageModule)
  },
  {
    path: 'viewcustomeraccount',
    loadChildren: () => import('./viewcustomeraccount/viewcustomeraccount.module').then( m => m.ViewcustomeraccountPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
