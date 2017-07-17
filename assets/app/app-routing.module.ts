import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogListComponent } from './blogs/blog-list/blog-list.component';
import { BlogFullComponent } from './blogs/blog-full/blog-full.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './admin/login/login.component';
import { NewBlogComponent } from './admin/new-blog/new-blog.component';
import { NewGallaryComponent } from './admin/new-gallary/new-gallary.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GallaryDetailComponent } from './gallary/gallary-detail/gallary-detail.component';
import { GallaryComponent } from './gallary/gallary.component';

import { AdminGuard } from './shared/admin-guard.service';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'gallary', component: GallaryComponent},
  { path: 'gallary/:id', component: GallaryDetailComponent },
  { path: 'blog', component: BlogListComponent },
  { path: 'blog/:id', component: BlogFullComponent },
  { path: 'blog/**', redirectTo:'/blog'},
  {path: 'admin', 
    component: AdminComponent, children:[
    {path: '', redirectTo:'new-blog', pathMatch: 'full'},
    {path: 'login', component:LoginComponent},
    {path: 'new-blog', component:NewBlogComponent},
    {path: 'new-gallary', component:NewGallaryComponent}

  ]},
  { path: 'about', component: AboutComponent},
  { path: '**', redirectTo: '/home' }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}