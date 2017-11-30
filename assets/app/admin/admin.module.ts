import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { AdminComponent } from './admin.component';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminService } from './admin.service';
import { AdminGuard } from './admin-guard.service';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  providers: [AdminGuard, AdminService]
})
export class AdminModule {}