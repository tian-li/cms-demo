import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

import { AdminGuard } from './admin-guard.service';

const adminRoutes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'user', loadChildren: './admin-user/admin-user.module#AdminUserModule' },
  { path: 'gallary', loadChildren: './admin-gallaries/admin-gallaries.module#AdminGallariesModule', canActivate: [AdminGuard] },
  { path: 'blog', loadChildren: './admin-blogs/admin-blogs.module#AdminBlogsModule', canActivate: [AdminGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }