import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Add Branch',
      url: '/addbranch',
      icon: 'git-branch'
    },
    {
      title: 'Add Employee',
      url: '/addemployee',
      icon: 'person-circle'
    },
    {
      title: 'Add Customer',
      url: '/addcustomer',
      icon: 'person'
    },
    {
      title: 'Create Account',
      url: '/addaccount',
      icon: 'file-tray'
    },
    {
      title: 'View Customer Account Data',
      url: '/viewcustomeraccount',
      icon: 'file-tray-stacked'
    },
    {
      title: 'Transaction',
      url: '/transaction',
      icon: 'paper-plane'
    },
    {
      title: 'Loan Saction',
      url: '/loansanction',
      icon: 'checkmark-done'
    },
    {
      title: 'Loan Payment',
      url: '/loanpayment',
      icon: 'cash'
    },
    {
      title: 'Deposit Interest',
      url: '/depositinterest',
      icon: 'add'
    },
    {
      title: 'Loan Interest',
      url: '/loaninterest',
      icon: 'add-circle'
    },
  ];
  

  constructor(
    private http: HttpClientModule,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
