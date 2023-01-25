import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginuserGuard implements CanActivate {

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {

    if(sessionStorage.getItem("UserLogged")!==null){

      let user = JSON.parse(sessionStorage.getItem("UserLogged")!).name.lastname;

      if(user!=="user"){
        return false;
      }

      return true;

    }

    return false;

  }

}
