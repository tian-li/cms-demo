export class Gallary {
  public title: string;
  public date: string;
  public location: {
    city:string,
    state: string
  }
  public imageUrl: {
    thumb:string,
    full:string
  };

  constructor(title: string, date:string, location:{city:string,
    state: string}, imageUrl: {thumb:string, full:string}){
    this.title=title;
    this.date=date;
    this.location = location;
    this.imageUrl = imageUrl;
  }
}