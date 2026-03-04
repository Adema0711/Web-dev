
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="/home" routerLinkActive="active">Home</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
      <a routerLink="/albums" routerLinkActive="active">Albums</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    nav a { margin-right: 15px; text-decoration: none; }
    .active { font-weight: bold; }
  `]
})
export class AppComponent {}
