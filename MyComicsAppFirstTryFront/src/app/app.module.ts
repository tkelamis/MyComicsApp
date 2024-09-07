import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ComicsComponent } from './comics/comics.component';
import { ComicDetailsComponent } from './comic-details/comic-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { LayoutComponent } from './layout/layout.component';
import { AddComicComponent } from './add-comic/add-comic.component';
import { ComicListComponent } from './comic-list/comic-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeleteComicComponent } from './delete-comic/delete-comic.component';

@NgModule({
  declarations: [
    AppComponent,
    ComicsComponent,
    ComicDetailsComponent,
    HomePageComponent,
    LayoutComponent,
    AddComicComponent,
    ComicListComponent,
    DeleteComicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
