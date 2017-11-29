import { Component, OnInit } from '@angular/core';

import { GallaryService } from '../gallary.service';

import { PagerService } from '../../../shared/pager.service';

import { Gallary } from '../../../models/gallary.model';

@Component({
  selector: 'app-gallary-list',
  templateUrl: './gallary-list.component.html',
  styleUrls: ['./gallary-list.component.css']
})
export class GallaryListComponent implements OnInit {
  gallary: Gallary[];
  pager: any = {};
  pagedItems: any[];
  private allItems: any[];
  itemsPerRow: number;
  rows = [];
  
  constructor(
    private gallaryService: GallaryService,
    private pagerService: PagerService) { }

  ngOnInit() {
    this.gallaryService.getGallary()
        .subscribe(
          (gallary:Gallary[]) => {
            this.allItems = gallary;
            this.setPage(1);
            this.itemsPerRow = 3
            this.rows = Array.from(Array(Math.ceil(this.pagedItems.length / this.itemsPerRow)).keys());
          });
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page, 6);

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
