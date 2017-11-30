import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Blog } from '../../../models/blog.model';
import { BlogsService } from '../../../index/blogs/blogs.service';


@Component({
  selector: 'app-admin-blogs-list',
  templateUrl: './admin-blogs-list.component.html',
  styleUrls: ['./admin-blogs-list.component.css']
})
export class AdminBlogsListComponent implements OnInit {
  blogs: Blog[];

  constructor(private blogsService: BlogsService) { }

  ngOnInit() {
    this.blogsService.getBlogs()
      .subscribe((blogs: Blog[]) => {
        this.blogs = blogs;
      });
  }
}