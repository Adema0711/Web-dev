import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.html',
  styleUrls: ['./movie-card.css']
})
export class MovieCardComponent {

  @Input() movie!: Movie;
  @Output() deleteMovie = new EventEmitter<number>();

  vote() {
    this.movie.votes++;
  }

  remove() {
    this.deleteMovie.emit(this.movie.id);
  }
}
