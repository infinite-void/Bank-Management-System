import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-loansanction',
  templateUrl: './loansanction.page.html',
  styleUrls: ['./loansanction.page.scss'],
})
export class LoansanctionPage implements OnInit {

  constructor(private http: HttpClientModule, public httpClient: HttpClient) { }
  ifsc : string="";
  cusid : string="";
  principle : Int32Array;
  sec : string="";
  loantype : string="";
  approval : Int32Array;
  ngOnInit() {
  }
  sanctionloan(){
    this.httpClient.get('http://localhost:3000/loansanction?ifsc='+this.ifsc+'&principle='+this.principle+'&cusid='+this.cusid+'&sec='+this.sec+'&loantype='+this.loantype+'&approval='+this.approval,  {responseType: 'text'}).subscribe(server_response => {
      var data = server_response;
      console.log(data);
      if(data)
        alert('loan account number is '+data);
      else  
        alert('error in account creation');
    });
  }
}
