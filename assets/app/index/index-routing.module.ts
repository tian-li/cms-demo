import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index.component';

const indexRoutes: Routes = [
  { path: 'index', component: IndexComponent, children:[
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'gallary', loadChildren:'./gallary/gallary.module#GallaryModule'},
    { path: 'blog', loadChildren:'./blogs/blogs.module#BlogsModule'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(indexRoutes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }