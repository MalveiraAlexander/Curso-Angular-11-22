import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserRequestModel } from '../models/user.model';
import { LoginRequestModel } from '../models/login.model';

@Injectable()
export class AuthService {

  private URL: string = 'https://localhost:44323/';
  constructor(private http: HttpClient) { }

  register(request: UserRequestModel) {
    return this.http.post(`${this.URL}api/auth/register`, request);
  }

  login(request: LoginRequestModel) {
    return this.http.post(`${this.URL}api/auth/login`, request);
  }
}
