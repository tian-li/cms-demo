import { Component, OnInit } from '@angular/core';

import{Blog} from '../../models/blog.model';
import{BlogsService} from '../blogs.service';


@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[];

  constructor(private blogsService: BlogsService) { }

  ngOnInit() {
    this.blogsService.getBlogs()
        .subscribe(
          (blogs:Blog[]) => {
            this.blogs = blogs;
            
          });
    // console.log(this.blogs);
  }

}
