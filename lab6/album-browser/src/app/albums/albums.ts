
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumService } from '../services/album';
import { Album } from '../models/album';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.html'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    console.log('AlbumsComponent ngOnInit'); 

    this.albumService.getAlbums().subscribe({
      next: (data) => {
        console.log('Albums fetched:', data); 
        this.albums = data;
        this.loading = false; 
      },
      error: (err) => {
        console.error('Error fetching albums:', err);
        this.loading = false; 
      }
    });
  }

  delete(id: number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }
}
