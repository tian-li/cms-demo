import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const adminRoutes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'signup', component: AdminSignupComponent },
  { path: 'login', component: AdminLoginComponent }
  { path: 'blog', loadChildren:'./blogs/admin-blogs.module#AdminBlogsModule'}
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {

}