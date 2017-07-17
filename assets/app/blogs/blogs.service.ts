import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
//import 'rxjs/Rx';
import { Observable } from "rxjs";

import{Blog} from '../models/blog.model';

@Injectable()
export class BlogsService {
  
private blogs: Blog[] = [];

constructor(private http: Http){}

  getBlogs() {
    return this.http.get('http://localhost:3000/blog')
      .map((response:Response) => {
        const blogs = response.json().obj;
        let transformedBlogs:Blog[]=[];
        for(let blog of blogs) {
          transformedBlogs.push(new Blog(
              blog.title,
              blog.summary,
              blog.content,
              blog.imageUrl
            ));
        }
        this.blogs = transformedBlogs;
        console.log(this.blogs);
        return transformedBlogs;
      })
      .catch((error: Response) => {
        return Observable.throw("error when get");
      });
  }

  getBlog(id: number){
    return this.blogs[id];
  }

  newBlog(blog: Blog){
    //this.blogs.push(blog);
    console.log("blog in service");
    console.log(blog);
    const body = JSON.stringify(blog);
    console.log("body");
    console.log(body);
    const headers = new Headers({'Content-Type':'application/json'});

    return this.http.post('http://localhost:3000/blog', body, {headers:headers})
      .map((response:Response) => {
        console.log("response");
        console.log(response);

        const result = response.json();

        console.log("result");
        console.log(result);
        
        const blog = new Blog(
          result.obj.title,
          result.obj.summary,
          result.obj.content,
          result.obj.imageUrl
          );
        this.blogs.push(blog);
        return blog;
      })
      .catch((error: Response) => {
           return Observable.throw("error when add new 123");
       });
  }
}