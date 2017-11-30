import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GallaryComponent } from './gallary.component';
import { GallaryListComponent } from './gallary-list/gallary-list.component';
import { GallaryFullComponent } from './gallary-full/gallary-full.component';

import { GallaryRoutingModule } from './gallary-routing.module';


@NgModule({
  declarations: [
    GallaryComponent,
    GallaryListComponent,
    GallaryFullComponent
  ],
  imports: [
    CommonModule,
    GallaryRoutingModule,
    FormsModule
  ]
})
export class GallaryModule {}