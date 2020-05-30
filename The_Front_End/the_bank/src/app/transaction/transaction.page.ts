import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {
  daccno : Int32Array=null;
  cifsc : string="";
  difsc : string="";
  caccno : Int32Array=null;
  amt : Int32Array=null;
  constructor(private http: HttpClientModule, public httpClient: HttpClient) { }

  ngOnInit() {
  }
  addtrans() {
    this.httpClient.get('http://localhost:3000/addtrans?daccno='+this.daccno+'&difsc='+this.difsc+'&caccno='+this.caccno+'&cifsc='+this.cifsc+'&amt='+this.amt,  {responseType: 'text'}).subscribe(server_response => {
      var data = server_response;
      console.log(data);
      if(data)
        alert('transaction id is '+data);
      else  
        alert('error in transaction');
    });
  }

}
