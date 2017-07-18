import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Gallary } from '../models/gallary.model';

@Injectable()
export class GallaryService {

  private gallary: Gallary[] = [];

  constructor(private http: Http){}

  getGallary() {
    return this.http.get('https://tiantianapp.herokuapp.com/gallaries')
      .map((response:Response) => {
        const gallary = response.json().obj;
        let transformedGallary:Gallary[]=[];
        for(let g of gallary) {
          transformedGallary.push(new Gallary(
              g.title,
              g.date,
              g.city,
              g.state,
              g.thumb,
              g.full,
              g._id
            ));
        }
        this.gallary = transformedGallary;
        //console.log(this.gallary);
        return transformedGallary;
      })
      .catch((error: Response) => {
        return Observable.throw("error when get");
      });
  }

  getPhoto(id: number){
    return this.http.get('https://tiantianapp.herokuapp.com/gallaries/'+id)
      .map((response:Response) => {
        return response.json().obj;
      })
      .catch((error:Response) => {
        return Observable.throw("error when get one photo");

      });
  }

  newGallary(gallary: Gallary){
    const body = JSON.stringify(gallary);
    const headers = new Headers({'Content-Type':'application/json'});

    return this.http.post('https://tiantianapp.herokuapp.com/gallaries', body, {headers:headers})
      .map((response:Response) => {
        console.log("response");
        console.log(response);

        const result = response.json();

        console.log("result");
        console.log(result);
        
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
}