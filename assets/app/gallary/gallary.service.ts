import{Gallary} from '../models/gallary.model';

export class GallaryService {
  private gallary: Gallary[] = [
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

  getGallary() {
    return this.gallary.slice();
  }

  getPhoto(id: number){
    return this.gallary[id];
  }

  newPhoto(photo: Gallary){
    this.gallary.push(photo);
  }
}