export class Blog {

  public title: string;
  public summary: string;
  public content: string;
  public mdcontent: string;
  public imageUrl: string;
  public createDate: Date;
  public lastUpdate: Date;
  public id?: string;
  public comments?: number[];
  public tags?: string[];

  constructor(title: string,
    summary: string,
    mdcontent: string,
    content: string,
    imageUrl: string,
    lastUpdate: Date,
    createDate: Date,
    tags?: string[],
    id?: string,
    comments?: number[]
  ) {
    this.title = title;
    this.summary = summary;
    this.mdcontent = mdcontent;
    this.content = content;
    this.imageUrl = imageUrl;
    this.lastUpdate = lastUpdate;
    this.createDate = createDate;
    this.id = id;
    this.comments = comments;
    this.tags = tags;
  }
}