import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SesionService } from '../services/sesion.service';

@Injectable({
  providedIn: 'root'
})
export class SesionGuard implements CanActivate {
  constructor(private storageService: SesionService, private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let sesion = this.returnUserData();
    if (sesion != null) {
      return true;
    } else {
      this.router.navigateByUrl('/inicio-sesion');
      return false;
    }

    return true;
  }

  returnUserData() {
    return this.storageService.secureStorage.getItem('userSesionData');
  }
  
}
