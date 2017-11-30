import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from '../../environments/environment';
import { Blog } from '../../models/blog.model';
import { BlogComment } from '../../models/blog-comment.model';

@Injectable()
export class BlogsService {

  private blogs: Blog[] = [];
  private url = environment.url;

  constructor(private http: Http) { }

  getBlogs() {
    return this.http.get(this.url + '/blogs')
      .map((response: any) => {
        const blogs = response.json().obj;
        let transformedBlogs: Blog[] = [];
        for (let blog of blogs) {
          transformedBlogs.push(new Blog(
            blog.title,
            blog.summary,
            blog.mdcontent,
            blog.content,
            blog.imageUrl,
            blog.lastUpdate,
            blog.createDate,
            blog.tags,
            blog._id
          ));
        }
        this.blogs = transformedBlogs;
        return transformedBlogs;
      })
      .catch((error: any) => {
        return Observable.throw(error);
      });
  }

  getBlog(id: number) {
    return this.http.get(this.url + '/blogs/' + id)
      .map((response: any) => {
        return response.json().obj;
      })
      .catch((error: any) => {
        return Observable.throw("error when get one blog");
      });
  }

  newBlog(blog: Blog) {
    const body = JSON.stringify(blog);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.url + '/blogs', body, { headers: headers })
      .map((response: any) => {
        const result = response.json();
        let id: string = result.obj._id;
        const blog = new Blog(
          result.obj.title,
          result.obj.summary,
          result.obj.mdcontent,
          result.obj.mdcontent,
          result.obj.imageUrl,
          result.obj.lastUpdate,
          result.obj.createDate,
          result.obj.tags,
          id
        );
        this.blogs.push(blog);
        return blog;
      })
      .catch((error: any) => {
        return Observable.throw("error when add new blog:\n", error);
      });
  }

  updateBlog(id: number, blog: Blog) {
    const body = JSON.stringify(blog);
    let link = this.url + '/blogs/' + id
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.put(link, body, { headers: headers })
      .map((response: any) => {
        return response.json();
      })
      .catch((error: any) => {
        return Observable.throw("error when update blog:\n", error);
      });
  }
}