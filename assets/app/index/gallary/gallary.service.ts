import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from '../../environments/environment';
import { Gallary } from '../../models/gallary.model';

@Injectable()
export class GallaryService {

  private gallary: Gallary[] = [];
  private url = environment.url;

  constructor(private http: Http) { }

  getGallary() {
    return this.http.get(this.url + '/gallaries')
      .map((response: any) => {
        const gallary = response.json().obj;
        let transformedGallary: Gallary[] = [];
        for (let g of gallary) {
          transformedGallary.push(new Gallary(
            g.title,
            g.date,
            g.city,
            g.state,
            g.thumb,
            g.full,
            g.likes,
            g._id,
            g.comments
          ));
        }
        this.gallary = transformedGallary;
        return transformedGallary;
      })
      .catch((error: any) => {
        return Observable.throw("error when get");
      });
  }

  getPhoto(id: number) {
    return this.http.get(this.url + '/gallaries/' + id)
      .map((response: any) => {
        return response.json().obj;
      })
      .catch((error: any) => {
        return Observable.throw("error when get one photo");
      });
  }

  newGallary(gallary: Gallary) {
    const body = JSON.stringify(gallary);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.url + '/gallaries', body, { headers: headers })
      .map((response: any) => {
        const result = response.json();
        const gallary = new Gallary(
          result.obj.title,
          result.obj.date,
          result.obj.city,
          result.obj.state,
          result.obj.thumb,
          result.obj.full
        );
        this.gallary.push(gallary);
        return gallary;
      })
      .catch((error: any) => {
        return Observable.throw("error when add new 123");
      });
  }

  updateGallaryLike(id: number, liked: boolean) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const body = JSON.stringify({ 'liked': liked });
    return this.http.put(this.url + '/gallaries/' + id + '/like', body, { headers: headers })
      .map((response: any) => {
        return response.json().obj;
      })
      .catch((error: any) => {
        return Observable.throw("error when like a photo");
      });
  }

  updateGallary(id: number, gallary: Gallary) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(gallary);
    return this.http.put(this.url + '/gallaries/' + id, body, { headers: headers })
      .map((response: any) => {
        return response.json().obj;
      })
      .catch((error: any) => {
        return Observable.throw("error when update a photo");
      });
  }
}