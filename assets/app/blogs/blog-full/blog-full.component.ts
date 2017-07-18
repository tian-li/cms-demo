import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

import{Blog} from '../../models/blog.model';

import{BlogsService} from '../blogs.service';

@Component({
  selector: 'app-blog-full',
  templateUrl: './blog-full.component.html',
  styleUrls: ['./blog-full.component.css']
})
export class BlogFullComponent implements OnInit {
  blog: Blog;
  id: number;

  constructor(private blService: BlogsService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.blService.getBlog(this.id)
          .subscribe(
            (blog:Blog) => {
              this.blog = blog;

              console.warn(this.blog);
            });
      });

    
  }

}
