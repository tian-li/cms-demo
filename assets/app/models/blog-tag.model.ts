export class BlogTag {
  
  public tag: string;
  public blogId: number;
  public id?: string;

  constructor(tag: string, blogId: number, id?: string){
    
    this.tag = tag;
    this.blogId = blogId;
    this.id=id;
  }
}