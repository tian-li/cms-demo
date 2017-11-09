import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { IndexComponent } from './index.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

import { CommentService } from '../shared/comment.service';

// import { BlogsModule } from './blogs/blogs.module';
// import { GallaryModule } from './gallary/gallary.module';

import { IndexRoutingModule } from './index-routing.module';

@NgModule({
  declarations: [
    IndexComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    // BlogsModule,
    // GallaryModule,
    IndexRoutingModule
  ],
  providers: [CommentService]
})
export class IndexModule { }
