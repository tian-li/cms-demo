import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './admin/login/login.component';
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
  { path: 'blog', loadChildren: './blogs/blogs.module#BlogsModule'},
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '/home' }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}