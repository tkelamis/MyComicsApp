import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicDetailsComponent } from './comic-details/comic-details.component';
import { ComicsComponent } from './comics/comics.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LayoutComponent } from './layout/layout.component';
import { AddComicComponent } from './add-comic/add-comic.component';
import { ComicListComponent } from './comic-list/comic-list.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'home', component: HomePageComponent },
      { path: 'home/addComic', component: AddComicComponent },
      { path: 'comic', component: ComicsComponent },
      { path: 'comic/:Id', component: ComicDetailsComponent },
      { path: 'comic_list', component: ComicListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
