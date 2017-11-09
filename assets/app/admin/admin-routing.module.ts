import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

import { AdminGuard } from '../shared/admin-guard.service';

const adminRoutes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'user', loadChildren: './admin-user/admin-user.module#AdminUserModule' },
  { path: 'blog', loadChildren: './blogs/admin-blogs.module#AdminBlogsModule', canActivate: [AdminGuard] },
  { path: 'gallary', loadChildren: './gallaries/admin-gallaries.module#AdminGallariesModule', canActivate: [AdminGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }