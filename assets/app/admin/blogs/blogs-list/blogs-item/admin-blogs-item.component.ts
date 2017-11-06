import { Component, OnInit, Input } from '@angular/core';

import { Blog } from '../../../../models/blog.model';

@Component({
  selector: 'app-admin-blogs-item',
  templateUrl: './admin-blogs-item.component.html',
  styleUrls: ['./amin-blogs-item.component.css']
})
export class AdminBlogsItemComponent implements OnInit {
  @Input() blog: Blog;
  @Input() index: number;

  ngOnInit() {
  }
}
