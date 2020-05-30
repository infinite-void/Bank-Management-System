import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.page.html',
  styleUrls: ['./addcustomer.page.scss'],
})
export class AddcustomerPage implements OnInit {
  name : string="";
  sex : string="";
  dob : string="";
  add1 : string="";
  add2 : string="";
  city : string="";
  postal : Int32Array;
  constructor(private http: HttpClientModule, public httpClient: HttpClient) { }

  ngOnInit() {
  }
  addcustomer(){
    this.httpClient.get('http://localhost:3000/addcustomers?name='+this.name+'&sex='+this.sex+'&dob='+this.dob+'&add1='+this.add1+'&add2='+this.add2+'&city='+this.city+'&postal='+this.postal,  {responseType: 'text'}).subscribe(server_response => {
      var data = server_response;
      console.log(data);
      if(data)
        alert('customer id is '+ data);
      else  
        alert('error in creation');
    });
  }
}
