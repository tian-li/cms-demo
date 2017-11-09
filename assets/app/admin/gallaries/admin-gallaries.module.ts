import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { AdminGallariesRoutingModule } from './admin-gallaries-routing.module';

import { AdminGallariesComponent } from './admin-gallaries.component';
import { AdminGallariesListComponent } from './gallaries-list/admin-gallaries-list.component';
import { AdminGallariesNewComponent } from './gallaries-new/admin-gallaries-new.component';

@NgModule({
  declarations: [
    AdminGallariesComponent,
    AdminGallariesListComponent,
    AdminGallariesNewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminGallariesRoutingModule
  ]
})
export class AdminGallariesModule {}