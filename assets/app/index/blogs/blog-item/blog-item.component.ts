import { Component, OnInit, Input } from '@angular/core';

import { Blog } from '../../../models/blog.model';


@Component({
  selector: 'home-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.css']
})

export class BlogItemComponent implements OnInit {
  @Input() blog: Blog;
  @Input() index: Number;
  constructor() { }

  ngOnInit() { }
}