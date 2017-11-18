import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from '../../../environments/environment';
import { Gallary } from '../../models/gallary.model';

@Injectable()
export class GallaryService {

  private gallary: Gallary[] = [];
  private url = environment.url;

  constructor(private http: Http) { }

  getGallary() {
    return this.http.get(this.url + '/gallaries')
      .map((response: Response) => {
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
        console.log(this.gallary);
        return transformedGallary;
      })
      .catch((error: Response) => {
        return Observable.throw("error when get");
      });
  }

  getPhoto(id: number) {
    return this.http.get(this.url + '/gallaries/' + id)
      .map((response: Response) => {
        return response.json().obj;
      })
      .catch((error: Response) => {
        return Observable.throw("error when get one photo");

      });
  }

  newGallary(gallary: Gallary) {
    const body = JSON.stringify(gallary);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.url + '/gallaries', body, { headers: headers })
      .map((response: Response) => {
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
      .catch((error: Response) => {
        return Observable.throw("error when add new 123");
      });
  }

  updateGallary(id: number, liked: boolean) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    const body = JSON.stringify({ 'liked': liked });
    console.log(body);
    // console.log(gallary);
    return this.http.put(this.url + '/gallaries/' + id + '/like', body, { headers: headers })
      .map((response: Response) => {
        console.log("response", response);
        return response.json().obj;
      })
      .catch((error: Response) => {
        console.log("error", error);
        return Observable.throw("error when like a photo");
      });
  }
}