export class Blog {
  
  public title: string;
  public summary: string;
  public content: string;
  public imageUrl: string;
  public createDate: Date;
  public lastUpdate: Date;
  public id?: string;
  public comments?: string[];
  public tags?: string[];

  constructor(title: string, 
              summary: string, 
              content: string, 
              imageUrl: string,
              lastUpdate: Date,
              createDate: Date,
              tags?: string[],
              id?:string,
              comments?: string[]
              ){
    
    this.title=title;
    this.summary = summary;
    this.content = content;
    this.imageUrl = imageUrl;
    this.lastUpdate = lastUpdate;
    this.createDate = createDate;
    this.id=id;
    this.comments = comments;
    this.tags = tags;
  }
}