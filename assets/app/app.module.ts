import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import{ AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BlogListComponent } from './blogs/blog-list/blog-list.component';
import { BlogFullComponent } from './blogs/blog-full/blog-full.component';

import { GallaryService } from './gallary/gallary.service';
import {BlogsService} from './blogs/blogs.service';
import {AdminService} from './shared/admin.service';
import {AdminGuard} from './shared/admin-guard.service';

import { AdminComponent } from './admin/admin.component';
import { NewBlogComponent } from './admin/new-blog/new-blog.component';
import { LoginComponent } from './admin/login/login.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GallaryComponent } from './gallary/gallary.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BlogListComponent,
    BlogFullComponent,
    AdminComponent,
    NewBlogComponent,
    LoginComponent,
    AboutComponent,
    HomeComponent,
    GallaryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [BlogsService, GallaryService, AdminService, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }