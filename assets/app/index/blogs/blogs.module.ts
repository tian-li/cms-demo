import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BlogsRoutingModule } from './blogs-routing.module';

import { BlogsComponent } from './blogs.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogFullComponent } from './blog-full/blog-full.component';
import { BlogItemComponent } from './blog-item/blog-item.component';

import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    BlogsComponent,
    BlogListComponent,
    BlogFullComponent,
    BlogItemComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    FormsModule
  ],
  exports: [BlogItemComponent]
})
export class BlogsModule {}