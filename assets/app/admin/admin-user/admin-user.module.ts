import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';

import { AdminUserComponent } from './admin-user.component';
import { AdminSignupComponent } from './signup/admin-signup.component';
import { AdminSigninComponent } from './signin/admin-signin.component';

import { AdminUserRoutingModule } from './admin-user-routing.module';

import { AdminService } from '../admin.service';


@NgModule({
  declarations: [
    AdminUserComponent,
    AdminSignupComponent,
    AdminSigninComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminUserRoutingModule
  ],
  providers: [AdminService]
})
export class AdminUserModule {}