export class Gallary {
  public title: string;
  public date: string;
  public city: string;
  public state: string;
  public thumb: string;
  public full: string;
  

  constructor(title: string, date:string, city:string, state:string, thumb:string, full:string){
    this.title=title;
    this.date=date;
    this.city = city;
    this.state = state;
    this.thumb = thumb;
    this.full = full;
  }
}