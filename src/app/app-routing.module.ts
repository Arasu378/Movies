import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginCompComponent} from './login-comp/login-comp.component';
import {BrowseMoviesComponent} from './browse-movies/browse-movies.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {UsersComponent} from './users/users.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {TestSortComponent} from './test-sort/test-sort.component';
import {CustomersComponent} from './customers/customers.component';
import {GraphCompComponent} from './graph-comp/graph-comp.component';
import {SecondGraphComponent} from './second-graph/second-graph.component';
const routes: Routes = [
  {path: 'home', component: BrowseMoviesComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginCompComponent},
  {path: 'movie/:id', component: MovieDetailsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'test-sort', component: TestSortComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'graph', component: GraphCompComponent},
  {path: 'sgraph', component: SecondGraphComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }

