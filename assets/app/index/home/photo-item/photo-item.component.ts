import { Component, OnInit, Input } from '@angular/core';

import { Gallary } from '../../../models/gallary.model';


@Component({
  selector: 'home-photo-item',
  templateUrl: './photo-item.component.html',
  styleUrls: ['./photo-item.component.css']
})

export class PhotoItemComponent implements OnInit {
  @Input() photo: Gallary;
  @Input() index: Number;
  constructor() { }

  ngOnInit() { }
}