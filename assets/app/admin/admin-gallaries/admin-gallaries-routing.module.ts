import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AdminGallariesComponent } from './admin-gallaries.component';
import { AdminGallariesListComponent } from './gallaries-list/admin-gallaries-list.component';
import { AdminGallariesNewComponent } from './gallaries-new/admin-gallaries-new.component';

const adminGallariesRoutes: Routes = [
  {
    path: '', component: AdminGallariesComponent, children: [
      { path: 'new', component: AdminGallariesNewComponent },
      { path: ':id', component: AdminGallariesNewComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminGallariesRoutes)
  ],
  exports: [RouterModule]
})
export class AdminGallariesRoutingModule { }