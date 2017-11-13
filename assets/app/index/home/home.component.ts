import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BlogsService } from '../blogs/blogs.service';
import { GallaryService } from '../gallary/gallary.service';
import { Blog } from '../../models/blog.model';
import { Gallary } from '../../models/gallary.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogs: Blog[];
  gallary: Gallary[];

  constructor(
    private blogsService: BlogsService,
    private gallaryService: GallaryService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.blogsService.getBlogs()
      .subscribe((blogs: Blog[]) => {
        this.blogs = blogs;
        console.log(blogs);
        this.blogs = this.blogs.slice(0, 3);
      });

    this.gallaryService.getGallary()
      .subscribe((gallary: Gallary[]) => {
        this.gallary = gallary;
        this.gallary = this.gallary.slice(0, 8);
      });
  }
}