import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from './movie';
import { MovieCardComponent } from './movie-card/movie-card';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  movies: Movie[] = [
    { id: 1, title: 'Inception', year: 2000, isWatched: true, votes: 0 },
    { id: 2, title: 'Interstellar', year: 2010, isWatched: true, votes: 0 },
    { id: 3, title: 'The Matrix', year: 1996, isWatched: false, votes: 0 },
    { id: 4, title: 'Avatar', year: 2009, isWatched: true, votes: 0 },
    { id: 5, title: 'Titanic', year: 1997, isWatched: false, votes:0},
  ];

  removeMovie(movieId: number) {
    this.movies = this.movies.filter(movie => movie.id !== movieId);
  }
}