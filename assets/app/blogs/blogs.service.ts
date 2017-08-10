import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
//import 'rxjs/Rx';
import { Observable } from "rxjs";

import { environment } from '../../environments/environment';
import{Blog} from '../models/blog.model';
import{BlogComment} from '../models/blog-comment.model';

@Injectable()
export class BlogsService {
  
private blogs: Blog[] = [];
private url = environment.url;

constructor(private http: Http){}

  getBlogs() {
    return this.http.get(this.url+'/blogs')
      .map((response:Response) => {
        const blogs = response.json().obj;
        let transformedBlogs:Blog[]=[];
        for(let blog of blogs) {
          transformedBlogs.push(new Blog(
              blog.title,
              blog.summary,
              blog.content,
              blog.imageUrl,
              blog._id
            ));
        }
        this.blogs = transformedBlogs;
        console.log(this.blogs);
        return transformedBlogs;
      })
      .catch((error: Response) => {
        return Observable.throw(error);
      });
  }

  getBlog(id: number){
    return this.http.get(this.url+'/blogs/'+id)
      .map((response:Response) => {
        console.log('response obj');
        console.log(response.json().obj);
        return response.json().obj;
      })
      .catch((error:Response) => {
        return Observable.throw("error when get one blog");
      });
  }

  newBlog(blog: Blog){
    const body = JSON.stringify(blog);
    const headers = new Headers({'Content-Type':'application/json'});

    return this.http.post(this.url+'/blogs', body, {headers:headers})
      .map((response:Response) => {
        console.log("response");
        console.log(response);

        const result = response.json();
        let id:string = result.boj._id;
        const blog = new Blog(
          result.obj.title,
          result.obj.summary,
          result.obj.content,
          result.obj.imageUrl,
          result.obj.tags,
          id
          );
        this.blogs.push(blog);
        return blog;
      })
      .catch((error: Response) => {
           return Observable.throw("error when add new blog");
       });
  }

  newComment(comment: Comment) {

  }
}