import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from '../../environments/environment';
import{Blog} from '../models/blog.model';
import{BlogComment} from '../models/blog-comment.model';

@Injectable()
export class CommentService {
  private blogComments: BlogComment[] = [];
  private url = environment.url;

  constructor(private http: Http){}

  newBlogComment(comment: BlogComment) {
    const body = JSON.stringify(comment);
    console.log('body');
    console.log(body);
    const headers = new Headers({'Content-Type':'application/json'});

    return this.http.post(this.url+'/comment/blogs', body, {headers:headers})
      .map((response:Response) => {
        console.log("response");
        console.log(response);

        const result = response.json();
        let id:string = result.boj._id;
        const blogComment = new BlogComment(
          result.obj.content,
          result.obj.username,
          result.obj.blog._id,
          result.obj.date,
          result.obj.id
          );
        //this.blogs.push(blog);
        console.log(blogComment);
        return blogComment;
      })
      .catch((error: Response) => {
          console.log(error);
          return Observable.throw("error when add new comment");
       });
  }
}