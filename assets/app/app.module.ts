import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { GallaryService } from './index/gallary/gallary.service';
import { BlogsService } from './index/blogs/blogs.service';
import { PagerService } from './shared/pager.service';
import { AdminGuard } from './shared/admin-guard.service';

import { AppRoutingModule } from './app-routing.module';
import { IndexModule } from './index/index.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    IndexModule
  ],
  providers: [BlogsService, GallaryService, PagerService, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }