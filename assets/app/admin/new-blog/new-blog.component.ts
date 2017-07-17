import { Component, OnInit } from '@angular/core';
import{Router, ActivatedRoute} from '@angular/router';
import { NgForm } from "@angular/forms";

import {BlogsService} from '../../blogs/blogs.service';
import { Blog } from '../../models/blog.model';

@Component({
  selector: 'app-new-blog',
  templateUrl: './new-blog.component.html',
  styleUrls: ['./new-blog.component.css']
})
export class NewBlogComponent implements OnInit {
  blog: Blog;
  

  constructor(private blogService: BlogsService,
              private router: Router,
              private route: ActivatedRoute) { }

  onSubmit(form:NgForm) {
    const blog = new Blog(
      form.value.title,
      form.value.summary,
      form.value.content,
      form.value.imageUrl,
      );
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
        // this.blogService.messageIsEdit.subscribe(
        //     (message: Message) => this.message = message
        // );
    }


}
