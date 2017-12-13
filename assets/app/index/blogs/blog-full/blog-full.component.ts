import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import 'rxjs/add/operator/mergeMap';
import * as hljs from 'highlight.js';

import { Blog } from '../../../models/blog.model';
import { BlogComment } from '../../../models/blog-comment.model';

import { BlogsService } from '../blogs.service';
import { CommentService } from '../../../shared/comment.service';

@Component({
  selector: 'app-blog-full',
  templateUrl: './blog-full.component.html',
  styleUrls: ['./blog-full.component.css']
})
export class BlogFullComponent implements OnInit {
  id: number;
  blog: Blog;
  content: string;
  comment: BlogComment;

  constructor(
    private blService: BlogsService,
    private commentService: CommentService,
    private router: Router,
    private route: ActivatedRoute,
    private eleRef: ElementRef
  ) {}

  // mergeMap
  ngOnInit() {
    this.route.params
      .mergeMap((params: Params) => {
        this.id = params['id'];
        return this.blService.getBlog(this.id);
      })
      .subscribe(blog => {
        this.blog = blog;
      });
  }

  onSubmit(form: NgForm) {
    const blogComment = new BlogComment(
      form.value.content,
      form.value.username,
      this.id
    );

    this.commentService.newBlogComment(blogComment).subscribe(data => {
      this.blog.comments.push(data);
    });
  }
}
