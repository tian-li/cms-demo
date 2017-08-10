export class Blog {
  
  public title: string;
  public summary: string;
  public content: string;
  public imageUrl: string;
  public id?: string;
  public commentId?: string;
  public tagId?: string[];

  constructor(title: string, 
              summary: string, 
              content: string, 
              imageUrl: string,
              tagId?: string[],
              id?:string,
              commentId?: string
              ){
    
    this.title=title;
    this.summary = summary;
    this.content = content;
    this.imageUrl = imageUrl;
    this.id=id;
    this.commentId = commentId;
    this.tagId = tagId;
  }
}