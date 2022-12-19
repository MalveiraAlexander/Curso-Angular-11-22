import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginResponseModel } from '../auth/models/login.model';
import { TokenModel } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private jwtHelper: JwtHelperService) { }

  setDataLogin(response: LoginResponseModel) {
    localStorage.setItem('token', response.token);
    localStorage.setItem('refresh', response.refreshToken);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getRefreshToken() {
    return localStorage.getItem('refresh');
  }

  getUserData() : TokenModel {
    return this.jwtHelper.decodeToken(this.getToken());
  }
}
