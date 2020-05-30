import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalvarService {
  serverip : string = 'http://localhost:3000/'
  constructor() { }
}
