import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path:"",
    component: MainComponent
  },
  {
    path:"bookmarks",
    component:BookmarksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
