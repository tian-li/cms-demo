import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { AdminComponent } from './admin.component';

import { AdminBlogsModule } from './blogs/admin-blogs.module';
import { AdminUserModule } from './admin-user/admin-user.module';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminService } from './admin.service';
import { AdminGuard } from '../shared/admin-guard.service';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    AdminBlogsModule
  ],
  providers: [AdminGuard, AdminService]
})
export class AdminModule {}