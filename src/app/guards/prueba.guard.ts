import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PruebaGuard implements CanActivate {

  /**
   *
   */
  constructor(private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isProfe: boolean = localStorage.getItem('isProfe') == 'true' ? true : false;
      if (isProfe) {
        return true;
      } else {
        this.router.navigate(['home']);
        return false;
      }
  }

}
