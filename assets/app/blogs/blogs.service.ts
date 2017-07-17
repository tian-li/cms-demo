import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";
//import 'rxjs/Rx';
import { Observable } from "rxjs";

import{Blog} from '../models/blog.model';

@Injectable()
export class BlogsService {
  /*private blogs: Blog[] = [
    new Blog(
      'Blog One',
      'This is blog one\'s summary. Please click Read More to see more. This is blog one\'s summary. Please click Read More to see more.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices ligula eget tortor imperdiet, et lacinia nibh interdum. Vivamus molestie mattis diam, sed vulputate nulla eleifend et. Ut faucibus diam et ipsum dictum, vitae mattis lorem efficitur. Fusce at dictum leo, eu dignissim diam. Morbi tincidunt nunc ex, sed viverra lectus iaculis at. Nam eget sem nulla. Nulla egestas at dui ac placerat.',
      'http://res.cloudinary.com/dho1fmz51/image/upload/v1499395953/thumb_q7dgzg.jpg'
    ),
    new Blog(
      'Blog One',
      'This is blog one\'s summary. Please click Read More to see more. This is blog one\'s summary. Please click Read More to see more.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices ligula eget tortor imperdiet, et lacinia nibh interdum. Vivamus molestie mattis diam, sed vulputate nulla eleifend et. Ut faucibus diam et ipsum dictum, vitae mattis lorem efficitur. Fusce at dictum leo, eu dignissim diam. Morbi tincidunt nunc ex, sed viverra lectus iaculis at. Nam eget sem nulla. Nulla egestas at dui ac placerat.',
      'http://res.cloudinary.com/dho1fmz51/image/upload/v1499395953/thumb_q7dgzg.jpg'
    ),
    new Blog(
      'Blog One',
      'This is blog one\'s summary. Please click Read More to see more. This is blog one\'s summary. Please click Read More to see more.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices ligula eget tortor imperdiet, et lacinia nibh interdum. Vivamus molestie mattis diam, sed vulputate nulla eleifend et. Ut faucibus diam et ipsum dictum, vitae mattis lorem efficitur. Fusce at dictum leo, eu dignissim diam. Morbi tincidunt nunc ex, sed viverra lectus iaculis at. Nam eget sem nulla. Nulla egestas at dui ac placerat.',
      'http://res.cloudinary.com/dho1fmz51/image/upload/v1499395953/thumb_q7dgzg.jpg'
    ),
    new Blog(
      'Blog One',
      'This is blog one\'s summary. Please click Read More to see more. This is blog one\'s summary. Please click Read More to see more.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices ligula eget tortor imperdiet, et lacinia nibh interdum. Vivamus molestie mattis diam, sed vulputate nulla eleifend et. Ut faucibus diam et ipsum dictum, vitae mattis lorem efficitur. Fusce at dictum leo, eu dignissim diam. Morbi tincidunt nunc ex, sed viverra lectus iaculis at. Nam eget sem nulla. Nulla egestas at dui ac placerat.',
      'http://res.cloudinary.com/dho1fmz51/image/upload/v1499395953/thumb_q7dgzg.jpg'
    ),
    new Blog(
      'Blog One',
      'This is blog one\'s summary. Please click Read More to see more. This is blog one\'s summary. Please click Read More to see more.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices ligula eget tortor imperdiet, et lacinia nibh interdum. Vivamus molestie mattis diam, sed vulputate nulla eleifend et. Ut faucibus diam et ipsum dictum, vitae mattis lorem efficitur. Fusce at dictum leo, eu dignissim diam. Morbi tincidunt nunc ex, sed viverra lectus iaculis at. Nam eget sem nulla. Nulla egestas at dui ac placerat.',
      'http://res.cloudinary.com/dho1fmz51/image/upload/v1499395953/thumb_q7dgzg.jpg'
    ),
    new Blog(
      'Blog One',
      'This is blog one\'s summary. Please click Read More to see more. This is blog one\'s summary. Please click Read More to see more.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices ligula eget tortor imperdiet, et lacinia nibh interdum. Vivamus molestie mattis diam, sed vulputate nulla eleifend et. Ut faucibus diam et ipsum dictum, vitae mattis lorem efficitur. Fusce at dictum leo, eu dignissim diam. Morbi tincidunt nunc ex, sed viverra lectus iaculis at. Nam eget sem nulla. Nulla egestas at dui ac placerat.',
      'http://res.cloudinary.com/dho1fmz51/image/upload/v1499395953/thumb_q7dgzg.jpg'
    ),
    new Blog(
      'Blog Two',
      'This is blog one\'s summary. Please click Read More to see more. This is blog one\'s summary. Please click Read More to see more.',
      'Curabitur consectetur nisl odio, sed rutrum velit faucibus quis. Vestibulum tristique imperdiet maximus. In at fringilla velit. Donec vitae nunc in erat porttitor pretium vel id neque. Sed ornare orci et leo auctor, vel convallis sem venenatis. Quisque sit amet cursus risus. Vestibulum lectus mauris, pulvinar sed sapien sit amet, viverra feugiat lorem.',
      'http://res.cloudinary.com/dho1fmz51/image/upload/v1499395953/thumb_q7dgzg.jpg'
    ),
    new Blog(
      'Blog Three',
      'This is blog one\'s summary. Please click Read More to see more. This is blog one\'s summary. Please click Read More to see more.',
      'Integer bibendum varius ornare. Ut eu risus at purus eleifend semper sed et ex. Proin sed elit tempus, sollicitudin felis volutpat, vehicula erat. Donec eros purus, auctor sed dui vulputate, consectetur gravida ex. Maecenas auctor quam felis, ac ultrices tortor viverra et. Duis faucibus at justo ac vulputate. Donec finibus, mi ac porta dapibus, sem quam condimentum justo, ut ultricies turpis leo eget lorem. Mauris rutrum, felis sed pellentesque scelerisque, ipsum risus molestie enim, eget cursus augue dui sed ligula.',
      'http://res.cloudinary.com/dho1fmz51/image/upload/v1499395953/thumb_q7dgzg.jpg'
    )
  ]
*/

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