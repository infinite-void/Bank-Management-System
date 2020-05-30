import { Component, OnInit } from '@angular/core';
import {  MenuController } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private http: HttpClientModule,public router:Router, public httpClient: HttpClient,public menuCtrl: MenuController) { }

  ngOnInit() {
    this.menuCtrl.enable(false);
  }
  user : string="";
  pass : string="";
  login() {
    this.httpClient.get('http://localhost:3000/login?user='+this.user+'&pass='+this.pass,  {responseType: 'text'}).subscribe(server_response => {
      var data = server_response;
      console.log(data);
      if(data=='11')
      this.router.navigateByUrl('/addbranch');
       // alert('correct pass');
      else if(data=='22')  
        alert('wrong user');
      else
        alert('wrong pass');
    });

  }
}
