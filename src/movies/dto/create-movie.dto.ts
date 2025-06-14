export class CreateMovieDto {
  title: string;
  year: string;
  rated?: string;
  released?: string;
  runtime: string;
  genres: string[];
  director: string;
  writer?: string;
  actors?: string;
  plot?: string;
  language?: string;
  country?: string;
  awards?: string;
  posterUrl?: string;
  metascore?: string;
  imdbRating?: string;
  imdbVotes?: string;
  imdbID?: string;
  type?: string;
  response?: string;
  images: string[];
}