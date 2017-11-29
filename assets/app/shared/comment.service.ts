import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from '../environments/environment';
import { BlogComment } from '../models/blog-comment.model';
import { GallaryComment } from '../models/gallary-comment.model';

@Injectable()
export class CommentService {
  private blogComments: BlogComment[] = [];
  private url = environment.url;

  constructor(private http: Http) { }

  newBlogComment(comment: BlogComment) {
    const body = JSON.stringify(comment);
    const headers = new Headers({ 'Content-Type': 'application/json' });

    return this.http.post(this.url + '/comment/blogs', body, { headers: headers })
      .map((response: Response) => {
        const result = response.json();
        const blogComment = new BlogComment(
          result.obj.content,
          result.obj.username,
          result.obj.blogId._id,
          result.obj.date,
          result.obj._id
        );
        return blogComment;
      })
      .catch((error: Response) => {
        console.log(error);
        return Observable.throw("error when add new blog comment");
      });
  }

  newGallaryComment(comment: GallaryComment) {
    const body = JSON.stringify(comment);
    const headers = new Headers({ 'Content-Type': 'application/json' });

    return this.http.post(this.url + '/comment/gallaries', body, { headers: headers })
      .map((response: Response) => {
        const result = response.json();
        const gallaryComment = new GallaryComment(
          result.obj.content,
          result.obj.username,
          result.obj.gallaryId._id,
          result.obj.date,
          result.obj._id
        );
        return gallaryComment;
      })
      .catch((error: Response) => {
        console.log(error);
        return Observable.throw("error when add new gallary comment");
      });
  }
}