import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-loanpayment',
  templateUrl: './loanpayment.page.html',
  styleUrls: ['./loanpayment.page.scss'],
})
export class LoanpaymentPage implements OnInit {
  ifsc : string="";
  laccno : Int32Array;
  amt: Int32Array;
  bifsc : string="";
  constructor(private http: HttpClientModule, public httpClient: HttpClient) { }

  ngOnInit() {
  }
  loanpay(){
    console.log(this.ifsc+this.laccno+this.amt+this.bifsc);
   /* var x = this.httpClient.get('http://localhost:3000/loanpayment?ifsc='+this.ifsc+'&laccno='+this.laccno+'&amt='+this.amt+'&bifsc='+this.bifsc);
    x
    .subscribe(data => {
      console.log('my data: ', data);
    })*/
    this.httpClient.get('http://localhost:3000/loanpayment?ifsc='+this.ifsc+'&laccno='+this.laccno+'&amt='+this.amt+'&bifsc='+this.bifsc,  {responseType: 'text'}).subscribe(server_response => {
      var data = server_response;
      console.log(data);
      if(data)
        alert('loan payment id is'+data);
      else  
        alert('error in payment');
    });
    
  }
  }


