import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminUserComponent } from './admin-user.component';
import { AdminSignupComponent } from './signup/admin-signup.component';
import { AdminSigninComponent } from './signin/admin-signin.component';

const adminUserRoutes: Routes = [
  {
    path: '', component: AdminUserComponent,
    children: [
      { path: '', component: AdminSignupComponent },
      { path: 'signup', component: AdminSignupComponent },
      { path: 'signin', component: AdminSigninComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminUserRoutes)],
  exports: [RouterModule]
})
export class AdminUserRoutingModule {

}