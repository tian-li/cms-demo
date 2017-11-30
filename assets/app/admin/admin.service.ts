import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from '../environments/environment';

import { AdminUser } from '../models/admin-user';

@Injectable()
export class AdminService {
  private url = environment.url;
  constructor(private http: Http) { }

  signUp(adminUser: AdminUser) {
    let body = JSON.stringify(adminUser);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.url + '/admins/signup', body, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch((error: Response) => {
        return Observable.throw(error);
      });
  }

  signIp(adminUser: AdminUser) {
    let body = JSON.stringify(adminUser);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.url + '/admins/signin', body, { headers: headers })
      .map((response: Response) => {
        return response.json();
      })
      .catch((error: Response) => {
        return Observable.throw(error);
      });
  }

  isLoggedIn() {
    const promise = new Promise(
      (resolve, reject) => {
        resolve(localStorage.getItem('token'));
      }
    );
    return promise;
  }
}