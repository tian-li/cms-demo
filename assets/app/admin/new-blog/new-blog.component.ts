import { Component, OnInit } from '@angular/core';
import{Router, ActivatedRoute} from '@angular/router';

import {BlogsService} from '../../blogs/blogs.service';
import { Blog } from '../../models/blog.model';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css']
})
export class NewBlogComponent implements OnInit {
  blog: Blog;
  blogTitle = '';
  blogSummary = '';
  blogContent = '';
  blogImagePath = '';

  constructor(private blService: BlogsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // if(!this.adminService.isLoggedIn()){
    //   this.router.navigate(['../login'], {relativeTo: this.route});
    //   console.log(this.route.url);
    // }
  }

  onNewBlog(){
    this.blog = new Blog(this.blogTitle, this.blogSummary,this.blogContent,this.blogImagePath);
    this.blService.newBlog(this.blog);
    // let blogs: Blog[] = this.blService.getBlogs()
    // console.log(blogs);
  }



}
