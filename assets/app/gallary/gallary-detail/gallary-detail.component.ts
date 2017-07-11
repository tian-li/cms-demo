import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

import { GallaryService } from '../gallary.service';
import { Gallary } from '../../models/gallary.model';


@Component({
  selector: 'app-gallary-detail',
  templateUrl: './gallary-detail.component.html',
  styleUrls: ['./gallary-detail.component.css']
})
export class GallaryDetailComponent implements OnInit {
  
  photo: Gallary;
  id: number;

  constructor(private glyService: GallaryService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.photo = this.glyService.getPhoto(this.id);
      }
    );

    console.log(this.photo);
  }

}
