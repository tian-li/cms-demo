import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { AdminComponent } from './admin.component';

import { AdminBlogsModule } from './blogs/admin-blogs.module';

// import { AdminBlogsRoutingModule } from './blogs/admin-blogs-routing.module';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    // AdminBlogsRoutingModule,
    AdminRoutingModule,
    AdminBlogsModule
  ]
})
export class AdminModule {}