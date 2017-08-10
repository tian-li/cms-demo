import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { NgForm } from "@angular/forms";
import 'rxjs/add/operator/mergeMap';

import{Blog} from '../../models/blog.model';
import{BlogComment} from '../../models/blog-comment.model';

import{BlogsService} from '../blogs.service';
import{CommentService} from '../../shared/comment.service';

@Component({
  selector: 'app-blog-full',
  templateUrl: './blog-full.component.html',
  styleUrls: ['./blog-full.component.css']
})
export class BlogFullComponent implements OnInit {
  
  id: number;
  blog: Blog;
  comment: BlogComment;

  constructor(private blService: BlogsService,
              private commentService: CommentService,
              private router: Router,
              private route: ActivatedRoute) { }

  // mergeMap 
  ngOnInit() {
    console.log(this.id);
    this.route.params
      .mergeMap((params: Params) => {
        this.id = params['id'];
        return this.blService.getBlog(this.id);
      })
      .subscribe((blog) => {
        this.blog = blog;
        console.log("merge");
        console.log(this.blog);
      });
  }

  onSubmit(form:NgForm) {
    const blogComment = new BlogComment(
      form.value.content,
      form.value.username,
      this.id);
    console.log(blogComment);
    this.commentService.newBlogComment(blogComment)
      .subscribe(
        data => console.log(data));
  }

}
