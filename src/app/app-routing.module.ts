import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PhotoGridComponent} from './photo-grid/photo-grid.component';
import {AboutViewComponent} from './about-view/about-view.component';
import {ImageModalComponent} from './image-modal/image-modal.component';

const routes: Routes = [
  { path: '', redirectTo: '/photos', pathMatch: 'full' },
  { path: 'photos', component: PhotoGridComponent },
  { path: 'about', component: AboutViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
