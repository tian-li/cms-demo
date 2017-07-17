import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Gallary } from '../models/gallary.model';

@Injectable()
export class GallaryService {
  /*private gallary: Gallary[] = [
    new Gallary(
      'Coffee',
      'Aug, 2017',
      {
        city:'St. Louis',
        state:'MO'
      },
      'http://res.cloudinary.com/dho1fmz51/image/upload/c_crop,h_2268,w_3024,y_650/v1499395953/thumb_q7dgzg.jpg'
    ),
    new Gallary(
      'Bell',
      'Aug, 2017',
      {
        city:'St. Louis',
        state:'MO'
      },
      'http://res.cloudinary.com/dho1fmz51/image/upload/c_crop,h_2716,w_3622/v1499441363/WechatIMG57_feeubm.jpg'
    ),
    new Gallary(
      'Grand Cayon',
      'Aug, 2017',
      {
        city:'St. Louis',
        state:'MO'
      },
      'http://res.cloudinary.com/dho1fmz51/image/upload/c_crop,h_2507,w_3342/v1499441367/WechatIMG58_tkx65z.jpg'
    ),
    new Gallary(
      'Leaf',
      'Aug, 2017',
      {
        city:'St. Louis',
        state:'MO'
      },
      'http://res.cloudinary.com/dho1fmz51/image/upload/c_crop,h_2225,w_2967/v1499441361/WechatIMG63_yas8me.jpg'
    ),
    new Gallary(
      'Tree',
      'Aug, 2017',
      {
        city:'St. Louis',
        state:'MO'
      },
      'http://res.cloudinary.com/dho1fmz51/image/upload/c_crop,h_2268,w_3024/v1499441347/WechatIMG61_cs2zyg.jpg'
    ),
    new Gallary(
      'Key West',
      'Aug, 2017',
      {
        city:'St. Louis',
        state:'MO'
      },
      'http://res.cloudinary.com/dho1fmz51/image/upload/c_crop,h_3484,w_4645/v1496787391/k0mkbrowvl4zrf1u4djl.jpg'
    ),
    new Gallary(
      'XBox Controllor',
      'Aug, 2017',
      {
        city:'St. Louis',
        state:'MO'
      },
      'http://res.cloudinary.com/dho1fmz51/image/upload/v1499441329/WechatIMG59_vygcur.jpg'
    ),
    new Gallary(
      'Morning Fog',
      'Aug, 2017',
      {
        city:'St. Louis',
        state:'MO'
      },
      'http://res.cloudinary.com/dho1fmz51/image/upload/c_crop,h_2736,w_3648/v1499441350/WechatIMG64_qkxwwg.jpg'
    )
  ]
*/

  private gallary: Gallary[] = [];

  constructor(private http: Http){}

  getGallary() {
    return this.http.get('http://localhost:3000/gallary')
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

    return this.http.post('http://localhost:3000/gallary', body, {headers:headers})
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