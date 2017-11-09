import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BlogsRoutingModule } from './blogs-routing.module';

import { BlogsComponent } from './blogs.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogFullComponent } from './blog-full/blog-full.component';

@NgModule({
  declarations: [
    BlogsComponent,
    BlogListComponent,
    BlogFullComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    FormsModule
  ]
})
export class BlogsModule {}