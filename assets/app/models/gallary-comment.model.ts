export class GallaryComment {
  
  public content: string;
  public username: string;
  public gallaryId: number;
  public date: Date;
  public id?: string;

  constructor(content: string, username: string, gallaryId: number, date?: Date, id?: string){
    
    this.content = content;
    this.username = username;
    this.gallaryId = gallaryId;
    this.date = date;
    this.id=id;
  }
}