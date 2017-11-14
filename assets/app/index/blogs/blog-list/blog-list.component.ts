import { Component, OnInit } from '@angular/core';

import { Blog } from '../../../models/blog.model';
import { BlogsService } from '../blogs.service';

import { PagerService } from '../../../shared/pager.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  constructor(
    private blogsService: BlogsService,
    private pagerService: PagerService) { }

  blogs: Blog[];
  pager: any = {};
  pagedItems: any[];
  private allItems: any[];

  ngOnInit() {
    this.blogsService.getBlogs()
      .subscribe((blogs: Blog[]) => {
        this.allItems = blogs;
        this.setPage(1);
        // console.log(this.blogs);
      });
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page, 9);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
}

}
