import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowseMoviesComponent } from './browse-movies/browse-movies.component';
import {MoviesListService} from './service/movies-list.service';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module/material-module.module';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import {MovieDetailServiceService} from './service/movie-detail-service.service';
import { FooterCompComponent } from './footer-comp/footer-comp.component';
import {AuthModule} from './auth/auth.module';
import {LoginService} from './service/login.service';
import {StorageService} from './storage/storage.service';
import { UsersComponent } from './users/users.component';
import {UsersService} from './service/users.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TestSortComponent } from './test-sort/test-sort.component';
import { CustomersComponent } from './customers/customers.component';
import {CustomersService} from './service/customers.service';
import {RegisterService} from './service/register.service';
import {ApiError} from './storage/ApiError';
import { SignupDialogComponent } from './signup-dialog/signup-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    BrowseMoviesComponent,
    HeaderCompComponent,
    LoginCompComponent,
    MovieDetailsComponent,
    FooterCompComponent,
    UsersComponent,
    SignUpComponent,
    TestSortComponent,
    CustomersComponent,
    SignupDialogComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [MoviesListService, MovieDetailServiceService,
    LoginService, StorageService, UsersService, AuthModule, CustomersService, RegisterService, ApiError],
  bootstrap: [AppComponent]
})
export class AppModule { }
