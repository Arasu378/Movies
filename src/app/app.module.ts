import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowseMoviesComponent } from './browse-movies/browse-movies.component';
import {MoviesListService} from './movies-list.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module/material-module.module';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import {MovieDetailServiceService} from './movie-detail-service.service';
import { FooterCompComponent } from './footer-comp/footer-comp.component';
import {AuthModule} from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent,
    BrowseMoviesComponent,
    HeaderCompComponent,
    LoginCompComponent,
    MovieDetailsComponent,
    FooterCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AuthModule
  ],
  providers: [MoviesListService, MovieDetailServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
