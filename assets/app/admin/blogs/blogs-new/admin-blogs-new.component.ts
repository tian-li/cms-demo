import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from "@angular/forms";

import { Blog } from '../../../models/blog.model';
import { BlogsService } from '../../../index/blogs/blogs.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-new-blog',
  templateUrl: './admin-blogs-new.component.html',
  styleUrls: ['./admin-blogs-new.component.css']
})
export class AdminBlogsNewComponent implements OnInit {
  id: number;
  blog: Blog;
  editMode: false;
  currentTime: number;
  createDate: Date;

  constructor(
    private blogService: BlogsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.currentTime = Date.now();
    this.createDate = new Date(this.currentTime);
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.editMode = (params['id'] != null);
          if (this.editMode) {
            this.initForm();
          }
        }
      );
  }

  initForm() {
    this.blogService.getBlog(this.id)
      .subscribe((blog) => {
        this.createDate = blog.createDate;
        this.blog = blog;
      });
  }

  onSubmit(form:NgForm) {
    /* 添加博客到数据库 正确代码, 不要删 */
    // 如果没动原有的tag, 从form得到的value是数组, 不能用split方法
    let newTags=[];
    if (form.value.tags instanceof Array) {
      newTags = form.value.tags;
    } else if(form.value.tags != null && form.value.tags.length > 0) {
      newTags = form.value.tags.split(",");
    }
    console.log(this.createDate);
    let blog = new Blog(
      _.escape(form.value.title),
      _.escape(form.value.summary),
      _.escape(form.value.content),
      _.escape(form.value.imageUrl),
      new Date(this.currentTime), // lastUpdate
      this.createDate, // createDate
      newTags
      );

    if (this.editMode) {
      this.blogService.updateBlog(this.id, blog)
        .subscribe(
          data => console.log(data)
        );
    } else {
      this.blogService.newBlog(blog)
        .subscribe(
          data => console.log(data)
        );
    }
    form.resetForm();
    this.router.navigate(['..'],{ relativeTo: this.route });
  }

  onClear(form: NgForm) {
    this.blog = null;
    form.resetForm();
  }
}
