import { Component, OnInit } from '@angular/core';
import{ Router, ActivatedRoute } from '@angular/router';
import { NgForm } from "@angular/forms";

import {GallaryService} from '../../gallary/gallary.service';
import { Gallary } from '../../models/gallary.model';

@Component({
  selector: 'app-new-gallary',
  templateUrl: './new-gallary.component.html',
  styleUrls: ['./new-gallary.component.css']
})
export class NewGallaryComponent implements OnInit {
  gallary: Gallary;
  

  constructor(private gallaryService: GallaryService,
              private router: Router,
              private route: ActivatedRoute) { }

  onSubmit(form:NgForm) {
    console.log(form.value);
    let city = form.value.city;
    let state = form.value.state;
    let location = {city,state};
    let thumb = form.value.thumb;
    let full = form.value.full;
    let imageUrl = {thumb, full};
    const gallary = new Gallary(
      form.value.title,
      form.value.date,
      location,
      imageUrl);
    this.gallaryService.newGallary(gallary)
      .subscribe(
        data => console.log(data));
    form.resetForm;
  }

  onClear(form: NgForm) {
        this.gallary = null;
        form.resetForm();
    }

    ngOnInit() {
        // this.blogService.messageIsEdit.subscribe(
        //     (message: Message) => this.message = message
        // );
    }


}
