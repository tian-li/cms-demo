import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { IndexComponent } from './index.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

import { PhotoItemComponent } from './home/photo-item/photo-item.component';

import { CommentService } from '../shared/comment.service';

import { IndexRoutingModule } from './index-routing.module';

@NgModule({
  declarations: [
    IndexComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
    PhotoItemComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    IndexRoutingModule
  ],
  providers: [CommentService]
})
export class IndexModule { }
