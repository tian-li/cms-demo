export class BlogComment {
  
  public content: string;
  public username: string;
  public blogId: number;
  public date: Date;
  public id?: string;

  constructor(content: string, username: string, blogId: number, date?: Date, id?: string){
    
    this.content = content;
    this.username = username;
    this.blogId = blogId;
    this.date = date;
    this.id=id;
  }
}