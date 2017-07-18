export class Blog {
  
  public title: string;
  public summary: string;
  public content: string;
  public imageUrl: string;
  public id?: string;

  constructor(title: string, summary: string, content: string, imageUrl: string,id?:string){
    
    this.title=title;
    this.summary = summary;
    this.content = content;
    this.imageUrl = imageUrl;
    this.id=id;
  }
}