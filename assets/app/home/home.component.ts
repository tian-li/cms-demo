import { Component, OnInit } from '@angular/core';

import { BlogsService } from '../blogs/blogs.service';
import { Blog } from '../models/blog.model';
import { GallaryService } from '../gallary/gallary.service';
import { Gallary } from '../models/gallary.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  blogs: Blog[];
  gallary: Gallary[];

  constructor(private blogsService: BlogsService,
    private gallaryService: GallaryService) { }

  ngOnInit() {
    this.blogs = this.blogsService.getBlogs();
    this.blogs = this.blogs.slice(0,3);
    this.gallary = this.gallaryService.getGallary();
    console.log(this.gallary);
  }

}
