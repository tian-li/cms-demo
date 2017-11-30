import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { GallaryListComponent } from './gallary-list/gallary-list.component';
import { GallaryFullComponent } from './gallary-full/gallary-full.component';
import { GallaryComponent } from './gallary.component';

const GallaryRoutes: Routes = [
  {
    path: '', component: GallaryComponent, children: [
      { path: '', component: GallaryListComponent },
      { path: ':id', component: GallaryFullComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(GallaryRoutes)
  ],
  exports: [RouterModule]
})
export class GallaryRoutingModule {

}