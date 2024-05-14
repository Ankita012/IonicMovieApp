import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  movies:any[]= [];
  currentPage=1;
  imageBaseUrl = environment.images;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.loadMovies();
  }

  loadMovies(){
    this.movieService.getTopRatedMovies(this.currentPage).subscribe((res:any)=>{
      if (res && res.results) {
        this.movies = [...this.movies, ...res.results];
      }
    });
  }
}
