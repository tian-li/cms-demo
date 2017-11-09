import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Gallary } from '../../../models/gallary.model';
import { GallaryService } from '../../../index/gallary/gallary.service';


@Component({
  selector: 'app-admin-gallaries-list',
  templateUrl: './admin-gallaries-list.component.html',
  styleUrls: ['./admin-gallaries-list.component.css']
})
export class AdminGallariesListComponent implements OnInit {
  gallaries: Gallary[];

  constructor(private gallaryService: GallaryService) { }

  ngOnInit() {
    this.gallaryService.getGallary()
      .subscribe((gallaries: Gallary[]) => {
        this.gallaries = gallaries;
        console.log(this.gallaries);
      });
  }

}