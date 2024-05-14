import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  movie:any;
  imageUrl = environment.images;

  constructor(
    private route:ActivatedRoute, 
    private movieService: MovieService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.loadMovieDetails(id);
    } else {
      console.error('Invalid movie ID');
    }
  }

  loadMovieDetails(id: string) {
    this.movieService.getMovieDetails(id).subscribe((res:any) => {
        this.movie = res;
    });
  }
  openHomepage() {
    window.open(this.movie.homepage);
  }
}
