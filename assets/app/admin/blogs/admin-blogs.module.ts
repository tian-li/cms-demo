import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { AdminBlogsRoutingModule } from './admin-blogs-routing.module';

import { AdminBlogsComponent } from './admin-blogs.component';
import { AdminBlogsListComponent } from './blogs-list/admin-blogs-list.component';
import { AdminBlogsNewComponent } from './blogs-new/admin-blogs-new.component';

@NgModule({
  declarations: [
    AdminBlogsComponent,
    AdminBlogsListComponent,
    AdminBlogsNewComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminBlogsRoutingModule
  ]
})
export class AdminBlogsModule {}