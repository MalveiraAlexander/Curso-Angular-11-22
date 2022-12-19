import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { UserRequestModel2 } from '../models/userrequest.model';

@Injectable()
export class UserService {

  private URL: string = 'https://localhost:44323/';
  private header: HttpHeaders = new HttpHeaders();
  constructor(private http: HttpClient, private storage: StorageService) { }

  listarUsuarios(last: number, max: number) {
    this.header = new HttpHeaders()
                .set('Authorization', `Bearer ${this.storage.getToken()}`);

    return this.http.get(`${this.URL}api/user/all?lastId=${last}&maxElements=${max}`, {headers: this.header});
  }

  updateUser(request: UserRequestModel2, userId: number) {
    this.header = new HttpHeaders()
                .set('Authorization', `Bearer ${this.storage.getToken()}`);

    return this.http.put(`${this.URL}api/user?userId=${userId}`, request, {headers: this.header});
  }
}
