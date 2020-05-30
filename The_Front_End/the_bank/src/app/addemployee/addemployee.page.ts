import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.page.html',
  styleUrls: ['./addemployee.page.scss'],
})
export class AddemployeePage implements OnInit {
  name : string="";
  sex : string="";
  dob : string="";
  ifsc : string="";
  designation : string="";
  salary : Float32Array;
  password : string=""
  add1 : string="";
  add2 : string="";
  city : string="";
  postal : Int32Array

  constructor(private http: HttpClientModule, public httpClient: HttpClient) { }

  ngOnInit() {
  }
  addemployee() {
    /*var x = this.httpClient.get('http://localhost:3000/addemployee?name='+this.name+'&sex='+this.sex+'&dob='+this.dob+'&ifsc='+this.ifsc+'&designation='+this.designation+'&salary='+this.salary+'&password='+this.password+'&add1='+this.add1+'&add2='+this.add2+'&city='+this.city+'&postal='+this.postal);
    x
    .subscribe(data => {
      console.log('my data: ', data);
    })*/
    this.httpClient.get('http://localhost:3000/addemployee?name='+this.name+'&sex='+this.sex+'&dob='+this.dob+'&ifsc='+this.ifsc+'&designation='+this.designation+'&salary='+this.salary+'&password='+this.password+'&add1='+this.add1+'&add2='+this.add2+'&city='+this.city+'&postal='+this.postal,  {responseType: 'text'}).subscribe(server_response => {
      var data = server_response;
      console.log(data);
      if(data)
        alert('employee ID is'+data);
      else  
        alert('error in creation');
    });
    
  }

}
