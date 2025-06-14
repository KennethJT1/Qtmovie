import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  constructor(private prisma: PrismaService) {}

  async getRandomMovies(count: number = 10): Promise<Movie[]> {
    const totalMovies = await this.prisma.movie.count();
    const skip = Math.floor(Math.random() * Math.max(0, totalMovies - count));

    return this.prisma.movie.findMany({
      skip: skip,
      take: count,
    });
  }

  async createMany(movies: Movie[]): Promise<{ count: number }> {
    return this.prisma.movie.createMany({
      data: movies,
      skipDuplicates: true,
    });
  }

  async getMovieDetails(imdbID: string): Promise<Movie | null> {
    return this.prisma.movie.findUnique({
      where: { imdbID },
    });
  }
}
