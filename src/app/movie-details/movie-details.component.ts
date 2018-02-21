import { Component, OnInit } from '@angular/core';
import {MovieDetailServiceService} from '../movie-detail-service.service';
import {ActivatedRoute, ParamMap, Params} from '@angular/router';
import {ListResponse} from '../models/ListResponse';
import {Movie} from '../models/Movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  private selectedMovieId: number;
  movieDetails: ListResponse;
  title: string;
  titleImage: string;
  movieDescription: string;

  constructor(private service: MovieDetailServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
   this.route.params.subscribe(params => {
     this.selectedMovieId = +params['id'];
   });

     return this.service.getMovidDetails(this.selectedMovieId)
       .subscribe(response => {this.movieDetails = response;
       this.title = response.data.movie.title;
       this.titleImage = response.data.movie.medium_cover_image;
       this.movieDescription = response.data.movie.description_full;

       });

  }

}
