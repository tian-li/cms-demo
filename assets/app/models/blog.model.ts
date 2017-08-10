export class Blog {
  
  public title: string;
  public summary: string;
  public content: string;
  public imageUrl: string;
  public id?: string;
  public commentId?: string;
  public tags?: string[];

  constructor(title: string, 
              summary: string, 
              content: string, 
              imageUrl: string,
              tags?: string[],
              id?:string,
              commentId?: string
              ){
    
    this.title=title;
    this.summary = summary;
    this.content = content;
    this.imageUrl = imageUrl;
    this.id=id;
    this.commentId = commentId;
    this.tags = tags;
  }
}