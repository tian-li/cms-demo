import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from "@angular/forms";
import { DomSanitizer } from '@angular/platform-browser';

import { BlogsService } from '../../blogs/blogs.service';
import { Blog } from '../../models/blog.model';

import * as _ from 'lodash';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css']
})
export class NewBlogComponent implements OnInit {
  blog: Blog;
  

  constructor(private blogService: BlogsService,
              private router: Router,
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer) { }

  onSubmit(form:NgForm) {
    
    // let content = this.sanitizer.bypassSecurityTrustHtml(form.value.content);
    // console.log("过滤后的content: ",content);
    console.log(_.escape(form.value.content));
    /* 添加博客到数据库 正确代码, 不要删 */
    let tags = form.value.tags.split(",");
    const blog = new Blog(
      _.escape(form.value.title),
      _.escape(form.value.summary),
      _.escape(form.value.content),
      _.escape(form.value.imageUrl),
      tags
      );
    console.log(blog);
    this.blogService.newBlog(blog)
      .subscribe(
        data => console.log(data));
    form.resetForm;
  }

  onClear(form: NgForm) {
        this.blog = null;
        form.resetForm();
  }

  ngOnInit() {
    console.log('lodash verision: ', _.VERSION);
  }
}
