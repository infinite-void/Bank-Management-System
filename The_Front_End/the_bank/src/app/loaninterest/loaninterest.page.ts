import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-loaninterest',
  templateUrl: './loaninterest.page.html',
  styleUrls: ['./loaninterest.page.scss'],
})
export class LoaninterestPage implements OnInit {

  constructor(private http: HttpClientModule, public httpClient: HttpClient) { }

  ngOnInit() {
  }
  interestupdate() {
    this.httpClient.get('http://localhost:3000/loaninterestupdate',  {responseType: 'text'}).subscribe(server_response => {
      var data = server_response;
      if(data=='1')
        alert('the operation not possible and interest has already been updated today');
      
    });
  }
}
