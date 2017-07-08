import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild
} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import {AdminService} from './admin.service';

@Injectable()
export class AdminGuard implements CanActivate, CanActivateChild {
  
  constructor(private adminService: AdminService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean {
                return this.adminService.isLoggedIn()
                .then(
                  (loggedIn: boolean) => {
                    if(loggedIn){
                      return true;
                    }else{
                      this.router.navigate(['admin/login']);
                      console.log('you are not logged in!');
                      console.log(this.adminService.loggedIn);
                    }
                  }
                );
              }
  
  canActivateChild(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean {
                return this.canActivate(route, state);
              }
}