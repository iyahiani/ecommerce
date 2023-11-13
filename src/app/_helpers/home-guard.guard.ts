import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, Routes, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {StorageService} from "../_services/storage.service";

@Injectable({
  providedIn: 'root'
})
export class HomeGuardGuard implements CanActivate {
  constructor(private storageService: StorageService, private root : Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.storageService.isLoggedIn()){
        return true
      } else {
        this.root.navigate(['/login']);
        return false ;
      }

  }

}
