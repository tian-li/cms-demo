export class Gallary {
  public title: string;
  public date: string;
  public location: {
    city:string,
    state: string
  }
  public imagePath: string;

  constructor(title: string, date:string, location:{city:string,
    state: string}, imagePath: string){
    this.title=title;
    this.date=date;
    this.location = location;
    this.imagePath = imagePath;
  }
}