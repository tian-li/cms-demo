import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogFullComponent } from './blog-full/blog-full.component';
import { BlogsComponent } from './blogs.component';

const blogsRoutes: Routes = [
  {
    path: '', component: BlogsComponent, children: [
      { path: '', component: BlogListComponent },
      { path: ':id', component: BlogFullComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(blogsRoutes)
  ],
  exports: [RouterModule]
})
export class BlogsRoutingModule {

}