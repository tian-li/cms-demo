import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from '../../environments/environment';
import{ Blog } from '../models/blog.model';
import{ BlogComment } from '../models/blog-comment.model';
import{ GallaryComment } from '../models/gallary-comment.model';

@Injectable()
export class CommentService {
  private blogComments: BlogComment[] = [];
  private url = environment.url;

  constructor(private http: Http){}

  newBlogComment(comment: BlogComment) {
    const body = JSON.stringify(comment);
    // console.log('body');
    // console.log(body);
    const headers = new Headers({'Content-Type':'application/json'});

    return this.http.post(this.url+'/comment/blogs', body, {headers:headers})
      .map((response:Response) => {
        // console.log("response");
        // console.log(response);

        const result = response.json();
        // console.log(result);
        const blogComment = new BlogComment(
          result.obj.content,
          result.obj.username,
          result.obj.blogId._id,
          result.obj.date,
          result.obj._id
          );
        //this.blogs.push(blog);
        // console.log('blogComment');
        // console.log(blogComment);
        return blogComment;
      })
      .catch((error: Response) => {
          console.log(error);
          return Observable.throw("error when add new blog comment");
       });
  }

  newGallaryComment(comment: GallaryComment) {
    const body = JSON.stringify(comment);
    // console.log('body');
    // console.log(body);
    const headers = new Headers({'Content-Type':'application/json'});

    return this.http.post(this.url+'/comment/gallaries', body, {headers:headers})
      .map((response:Response) => {
        // console.log("response");
        // console.log(response);

        const result = response.json();
        // console.log(result);
        const gallaryComment = new GallaryComment(
          result.obj.content,
          result.obj.username,
          result.obj.gallaryId._id,
          result.obj.date,
          result.obj._id
          );
        //this.blogs.push(blog);
        // console.log('blogComment');
        // console.log(blogComment);
        return gallaryComment;
      })
      .catch((error: Response) => {
          console.log(error);
          return Observable.throw("error when add new gallary comment");
       });
  }
}