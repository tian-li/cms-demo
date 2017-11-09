import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";


import { GallaryService } from '../../../index/gallary/gallary.service';
import { Gallary } from '../../../models/gallary.model';

@Component({
  selector: 'app-new-gallary',
  templateUrl: './admin-gallaries-new.component.html',
  styleUrls: ['./admin-gallaries-new.component.css']
})
export class AdminGallariesNewComponent implements OnInit {
  gallary: Gallary;
  id: number;
  editMode: false;
  gallaryForm: FormGroup;

  constructor(
    private gallaryService: GallaryService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.gallaryForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      thumb: ['', Validators.required],
      full: ['', Validators.required]
    });
    this.route.params
      .subscribe((params: Params) => {
        this.id = params['id'];
        this.editMode = (params['id'] != null);
        if (this.editMode) {
          this.initForm();
        }
      });
  }

  initForm() {
    this.gallaryService.getPhoto(this.id)
      .subscribe((gallary) => {
        this.gallary = gallary;
        this.gallaryForm = this.fb.group({
          title: [this.gallary.title, Validators.required],
          date: [this.gallary.date, Validators.required],
          city: [this.gallary.city, Validators.required],
          state: [this.gallary.state, Validators.required],
          thumb: [this.gallary.thumb, Validators.required],
          full: [this.gallary.full, Validators.required]
        });
      });

  }

  onSubmit({ value, valid }: { value: Gallary, valid: boolean }) {
    if (valid) {
      this.gallaryService.newGallary(value)
        .subscribe(
        data => console.log(data)
        );
      this.gallaryForm.reset();
    }

  }

  onClear() {
    this.gallary = null;
    this.gallaryForm.reset();
  }
}