import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Gallary } from '../models/gallary.model';

@Injectable()
export class GallaryService {

  private gallary: Gallary[] = [];

  constructor(private http: Http){}

  getGallary() {
    return this.http.get('http://localhost:3000/gallaries')
      .map((response:Response) => {
        const gallary = response.json().obj;
        let transformedGallary:Gallary[]=[];
        for(let g of gallary) {
          transformedGallary.push(new Gallary(
              g.title,
              g.date,
              g.location,
              g.imageUrl
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

  getPhoto(id: number){
    return this.gallary[id];
  }

  newGallary(gallary: Gallary){
    const body = JSON.stringify(gallary);
    const headers = new Headers({'Content-Type':'application/json'});

    return this.http.post('http://localhost:3000/gallaries', body, {headers:headers})
      .map((response:Response) => {
        console.log("response");
        console.log(response);

        const result = response.json();

        console.log("result");
        console.log(result);
        
        const gallary = new Gallary(
          result.obj.title,
          result.obj.date,
          result.obj.location,
          result.obj.imageUrl
          );
        this.gallary.push(gallary);
        return gallary;
      })
      .catch((error: Response) => {
           return Observable.throw("error when add new 123");
       });
  }
}