export class Gallary {
  public title: string;
  public date: string;
  public city: string;
  public state: string;
  public thumb: string;
  public full: string;
  public likes: number;
  public _id?: string;
  public comments?: string[];
  

  constructor(title: string,
              date:string,
              city:string, 
              state:string, 
              thumb:string, 
              full:string, 
              likes?:number,
              _id?: string,
              comments?: string[]){
    this.title=title;
    this.date=date;
    this.city = city;
    this.state = state;
    this.thumb = thumb;
    this.full = full;
    this.likes = likes;
    this._id = _id;
    this.comments = comments;
  }
}