import { Movie as PrismaMovie } from '@prisma/client';

export class Movie implements PrismaMovie {
  id: number;
  title: string;
  year: string;
  rated: string | null;
  released: string | null;
  runtime: string;
  genres: string[];
  director: string;
  writer: string | null;
  actors: string | null;
  plot: string | null;
  language: string | null;
  country: string | null;
  awards: string | null;
  posterUrl: string | null;
  metascore: string | null;
  imdbRating: string | null;
  imdbVotes: string | null;
  imdbID: string | null;
  type: string | null;
  response: string | null;
  images: string[];
}