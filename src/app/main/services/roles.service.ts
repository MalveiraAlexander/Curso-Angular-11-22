import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { environment } from "../../../environments/environment";

@Injectable()
export class RolesService {

  private URL: string = environment.URL;
  private header: HttpHeaders = new HttpHeaders();
  constructor(private http: HttpClient, private storage: StorageService) { }

  getRoles() {
    this.header = new HttpHeaders()
                .set('Authorization', `Bearer ${this.storage.getToken()}`);

    return this.http.get(`${this.URL}api/role/all`, {headers: this.header});
  }
}
