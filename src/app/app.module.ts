import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowseMoviesComponent } from './browse-movies/browse-movies.component';
import {MoviesListService} from './service/movies-list.service';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HttpInterceptor} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material-module/material-module.module';
import { HeaderCompComponent } from './header-comp/header-comp.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import {MovieDetailServiceService} from './service/movie-detail-service.service';
import { FooterCompComponent } from './footer-comp/footer-comp.component';
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
import { CustomFieldsComponent } from './custom-fields/custom-fields.component';
import { GraphCompComponent } from './graph-comp/graph-comp.component';
import { SecondGraphComponent } from './second-graph/second-graph.component';
import {GraphService} from './service/graph.service';
import {MessageServiceService} from './service/message-service.service';
import {HttpErrorHandlerService} from './cache/http-error-handler.service';
import { MessagesComponent } from './messages/messages.component';
import {HttpInterceptorsProviders} from './interceptors/HttpInterceptorsProviders';
import {DatePipe} from "@angular/common";
import {GraphMapService} from "./graph-map.service";
import { Bootstrap1Component } from './bootstrap-1/bootstrap-1.component';


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
    SignupDialogComponent,
    CustomFieldsComponent,
    GraphCompComponent,
    SecondGraphComponent,
    MessagesComponent,
    Bootstrap1Component

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
    LoginService, StorageService, UsersService, CustomersService, RegisterService, ApiError, GraphService,
  MessageServiceService, HttpErrorHandlerService, HttpInterceptorsProviders, DatePipe, GraphMapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
