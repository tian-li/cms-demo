import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full'},
  { path: 'index', loadChildren: './index/index.module#IndexModule'},
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule'}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}