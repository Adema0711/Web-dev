export interface Movie {
  id: number;
  title?: string;
  year: number|string;
  isWatched: boolean;
  votes: number;
}