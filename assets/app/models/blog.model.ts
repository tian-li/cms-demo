export class Blog {
  
  public title: string;
  public summary: string;
  public content: string;
  public imageUrl: string;
  public id?: string;
  public comments?: string[];
  public tags?: string[];

  constructor(title: string, 
              summary: string, 
              content: string, 
              imageUrl: string,
              tags?: string[],
              id?:string,
              comments?: string[]
              ){
    
    this.title=title;
    this.summary = summary;
    this.content = content;
    this.imageUrl = imageUrl;
    this.id=id;
    this.comments = comments;
    this.tags = tags;
  }
}