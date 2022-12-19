import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class IpService {

  constructor(private http: HttpClient) { }


  getIP() {
    return this.http.get('https://api64.ipify.org?format=json');
  }
}
