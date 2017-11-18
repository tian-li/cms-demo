import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from "@angular/forms";
import { DatePipe } from '@angular/common';
import 'rxjs/add/operator/mergeMap';

import { Gallary } from '../../../models/gallary.model';
import { GallaryComment } from '../../../models/gallary-comment.model';

import { GallaryService } from '../gallary.service';
import { CommentService } from '../../../shared/comment.service';

@Component({
  selector: 'app-gallary-full',
  templateUrl: './gallary-full.component.html',
  styleUrls: ['./gallary-full.component.css']
})
export class GallaryFullComponent implements OnInit {

  id: number;
  photo: Gallary;
  likes: number;
  liked: boolean = false;
  comment: GallaryComment;

  constructor(private glyService: GallaryService,
    private commentService: CommentService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .mergeMap((params: Params) => {
        this.id = params['id'];
        return this.glyService.getPhoto(this.id);
      })
      .subscribe((photo) => {
        this.photo = photo;
        this.likes = photo.likes;
      });
  }

  onSubmit(form: NgForm) {
    const gallaryComment = new GallaryComment(
      form.value.content,
      form.value.username,
      this.id);
    console.log(gallaryComment);
    this.commentService.newGallaryComment(gallaryComment)
      .subscribe((data) => {
        this.photo.comments.push(data);
      });
    form.reset();
  }

  onLike() {
    this.liked = !this.liked;
    this.glyService.updateGallary(this.id, this.liked)
      .subscribe((data) => {
        this.likes = data.likes;
      });
  }
}
