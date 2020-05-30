import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-viewcustomeraccount',
  templateUrl: './viewcustomeraccount.page.html',
  styleUrls: ['./viewcustomeraccount.page.scss'],
})
export class ViewcustomeraccountPage implements OnInit {
  faccno : Int32Array=null;
  viewdata : any;
  viewldata : any;
  constructor(private http: HttpClientModule, public httpClient: HttpClient) { }

  ngOnInit() {
  }
  fetchData() {
    this.httpClient.get('http://localhost:3000/fetchdata?faccno='+this.faccno,  {responseType: 'json'}).subscribe(server_response => {
      var data = server_response;
      console.log(data);
      
      if(data) {
        //alert('data');
        this.viewdata = data;
        console.log(this.viewdata);
      }

      else  
        alert('error in transaction');
    });
    this.httpClient.get('http://localhost:3000/fetchldata?faccno='+this.faccno,  {responseType: 'json'}).subscribe(server_response => {
      var data = server_response;
      console.log(data);
      
      if(data) {
        //alert('data');
        this.viewldata = data;
        console.log(this.viewldata);
      }

      else  
        alert('error in transaction');
    });
  }

}
