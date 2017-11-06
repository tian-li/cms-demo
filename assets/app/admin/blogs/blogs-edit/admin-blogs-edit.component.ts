import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Blog } from '../../../models/blog.model';
import { BlogsService } from '../../../blogs/blogs.service';

@Component({
  selector: 'app-admin-blogs-edit',
  templateUrl: './admin-blogs-edit.component.html',
  styleUrls: ['./admin-blogs-edit.component.css']
})
export class AdminBlogsEditComponent implements OnInit {
  blog: Blog;
  id: number;

  constructor(private blogService: BlogsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .mergeMap((params: Params) => {
        this.id = params['id'];
        return this.blogService.getBlog(this.id);
      })
      .subscribe((blog) => {
        this.blog = blog;
        // console.log("merge");
        // this.content = this.blog.content;
        console.log("blog: ",this.blog);
      });
  }

}
