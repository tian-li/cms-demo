export class Blog {
  public title: string;
  public summary: string;
  public content: string;
  public imagePath: string;

  constructor(title: string, summary: string, content: string, imagePath: string){
    this.title=title;
    this.summary = summary;
    this.content = content;
    this.imagePath = imagePath;
  }
}