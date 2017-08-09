import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import 'rxjs/add/operator/mergeMap';

import{Blog} from '../../models/blog.model';

import{BlogsService} from '../blogs.service';

@Component({
  selector: 'app-blog-full',
  templateUrl: './blog-full.component.html',
  styleUrls: ['./blog-full.component.css']
})
export class BlogFullComponent implements OnInit {
  
  id: number;
  blog: Blog;

  constructor(private blService: BlogsService,
              private router: Router,
              private route: ActivatedRoute) { }

  // mergeMap 
  ngOnInit() {
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

}
