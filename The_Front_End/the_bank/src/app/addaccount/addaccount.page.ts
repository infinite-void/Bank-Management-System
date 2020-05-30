import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.page.html',
  styleUrls: ['./addaccount.page.scss'],
})
export class AddaccountPage implements OnInit {
  ifsc : string = "";
  acctype : string = "";
  cusid : string = ""
  constructor(private http: HttpClientModule, public httpClient: HttpClient) { }

  ngOnInit() {
  }
  addaccount(){
    this.httpClient.get('http://localhost:3000/addaccount?ifsc='+this.ifsc+'&acctype='+this.acctype+'&cusid='+this.cusid,  {responseType: 'text'}).subscribe(server_response => {
      var data = server_response;
      console.log(data);
      if(data)
        alert('account no is '+ data);
      else  
        alert('error in account creation');
    });
  }

}
