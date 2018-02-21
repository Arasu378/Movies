import { Component, OnInit } from '@angular/core';
import {MoviesListService} from '../movies-list.service';
import {ListResponse} from '../models/ListResponse';
import {Movie} from '../models/Movie';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-browse-movies',
  templateUrl: './browse-movies.component.html',
  styleUrls: ['./browse-movies.component.css']
})
export class BrowseMoviesComponent implements OnInit {
  movieList: ListResponse;
  moviesList: Movie[];
  constructor(private movieService: MoviesListService, private router: Router) { }

  ngOnInit() {
    this.getMovies();
  }

  private getMovies(): void {
    this.movieService.getMoviesList()
      .subscribe(response => {this.movieList = response;
      this.moviesList = response.data.movies;
      });
  }
  private movieDetails(movie: Movie): void {
    console.log(movie.id);
    localStorage.setItem('id', movie.url);
    sessionStorage.setItem('id', movie.url);
    this.router.navigate(['movie', movie.id]);
  }

}
