import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponseModel } from 'src/app/auth/models/login.model';
import { StorageService } from 'src/app/services/storage.service';

@Injectable()
export class RefreshService {

  private URL: string = 'https://localhost:44323/';
  constructor(private http: HttpClient, private storage: StorageService) { }

  refreshToken() {
    let refresh: string = this.storage.getRefreshToken();
    let id: string = this.storage.getUserData().id;
    let cookie: string = 'RSGDFSFSAJSA52456644626685';
    return this.http.get(`${this.URL}api/auth/refreshToken?userId=${id}&refreshToken=${refresh}&cookie=${cookie}`);
  }

  async refreshAsync(status: number): Promise<boolean> {
    let aux: boolean = false;
    if (status === 401) {
      this.refreshToken().subscribe({
        next: (data: LoginResponseModel) => {
          console.log('entro');
          this.storage.setDataLogin(data);
        },
        error: (error) => {
          localStorage.clear();
          location.reload();
        },
        complete: () => {
          aux = true;
        }
      })
    }
    return aux;
  }
}
