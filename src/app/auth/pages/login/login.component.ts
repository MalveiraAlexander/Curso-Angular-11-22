import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs/internal/observable/of';
import { catchError, timeout } from 'rxjs/operators';
import { StorageService } from 'src/app/services/storage.service';
import { LoginRequestModel, LoginResponseModel } from '../../models/login.model';
import { AuthService } from '../../services/auth.service';
import { IpService } from '../../services/ip.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  isError: boolean = false;
  isUserNotFound: boolean = false;
  loading: boolean = false;
  constructor(private auth: AuthService,
              private ip: IpService,
              private storage: StorageService,
              private router: Router) {}

  ngOnInit() : void {
    this.createForm();
  }

  login() {
    let request = new LoginRequestModel();
    request.username = this.loginForm.value.username;
    let password = btoa(this.loginForm.value.password);
    request.password = password;
    request.deviceName = `${this.getBrowserInfo()}-${navigator.platform}`;
    request.isApp = false;
    request.cookie = 'RSGDFSFSAJSA52456644626685';
    this.isUserNotFound = false;
    this.isError = false;
    this.loading = true;
    this.ip.getIP().subscribe({
      next: (data: any) => {
        console.log(data);
        request.publicIP = data.ip;
      },
      error: (error) => {
        console.log(error);
        request.publicIP = 'NaN';
      }, complete: () => {
        this.auth.login(request).subscribe({
          next: (data: LoginResponseModel) => {
            this.storage.setDataLogin(data);
          },
          error: (error) => {
            this.loading = false;
            console.log(error);
            if (error.error) {
              let e: string = error.error;
              if (e.includes('Error S-002')) {
                this.isError = true;
                this.isUserNotFound = false;
              }
              if (e.includes('Error S-001')) {
                this.isError = false;
                this.isUserNotFound = true;
              }
            }
          },
          complete: () => {
            this.router.navigate(['/main']);
          }
        })
      }
    });
  }

  getBrowserInfo(): string {
    var ua= navigator.userAgent, tem,
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    return M.join(' ');
  };

  private createForm() {
    this.loginForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)])
    })
  }
}
