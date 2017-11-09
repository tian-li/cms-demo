import { NgModule } from  '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AdminBlogsComponent } from './admin-blogs.component';
import { AdminBlogsListComponent } from './blogs-list/admin-blogs-list.component';
import { AdminBlogsNewComponent } from './blogs-new/admin-blogs-new.component';

const adminBlogsRoutes: Routes = [
  { path: '', component: AdminBlogsComponent, children: [
    { path: 'new', component: AdminBlogsNewComponent },
    { path: ':id', component: AdminBlogsNewComponent }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(adminBlogsRoutes)
  ],
  exports: [RouterModule]
})
export class AdminBlogsRoutingModule {

}