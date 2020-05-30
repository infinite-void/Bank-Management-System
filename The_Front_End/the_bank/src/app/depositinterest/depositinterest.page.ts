import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-depositinterest',
  templateUrl: './depositinterest.page.html',
  styleUrls: ['./depositinterest.page.scss'],
})
export class DepositinterestPage implements OnInit {

  constructor(private http: HttpClientModule, public httpClient: HttpClient) { }

  ngOnInit() {
    
  }
  interestupdate() {
    this.httpClient.get('http://localhost:3000/depositinterestupdate',  {responseType: 'text'}).subscribe(server_response => {
      var data = server_response;
      if(data=='1')
        alert('the operation not possible and interest has already been updated today');
      
    });
  }
}
