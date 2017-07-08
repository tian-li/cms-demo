import { Component, OnInit } from '@angular/core';

import { GallaryService } from './gallary.service';
import { Gallary } from '../models/gallary.model';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {
  gallary: Gallary[];
  constructor(private gallaryService: GallaryService) { }

  ngOnInit() {
    this.gallary = this.gallaryService.getGallary();
  }

}
