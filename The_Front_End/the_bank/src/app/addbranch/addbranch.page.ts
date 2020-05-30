import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {  MenuController } from '@ionic/angular';
@Component({
  selector: 'app-addbranch',
  templateUrl: './addbranch.page.html',
  styleUrls: ['./addbranch.page.scss'],
})


export class AddbranchPage implements OnInit {

  ifsc : string="";
  area : string="";
  city : string="";
  MID : string="";

  constructor(private http: HttpClientModule, public httpClient: HttpClient,public menuCtrl: MenuController) { }

  ngOnInit() {
    this.menuCtrl.enable(true);
  }
  addbranch() {
    console.log(this.ifsc+this.area+this.city+this.MID);
    /*var x = this.httpClient.get('http://localhost:3000/addbranch?ifsc='+this.ifsc+'&area='+this.area+'&city='+this.city+'&MID='+this.MID)
    x
    .subscribe(data => {
      console.log('my data: ', data);
    })*/

    this.httpClient.get('http://localhost:3000/addbranch?ifsc='+this.ifsc+'&area='+this.area+'&city='+this.city+'&MID='+this.MID,  {responseType: 'text'}).subscribe(server_response => {
      var data = server_response;
      console.log(data);
      if(data==='1')
        alert('success');
      else  
        alert('error in creation');
    });
  }
}
