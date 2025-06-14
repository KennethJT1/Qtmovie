import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Query,
  Render,
} from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  @Render('movies')
  async findAll(@Query('t') timestamp: string) {
    const movies = await this.moviesService.getRandomMovies();
    return {
      movies,
      timestamp,
    };
  }

  @Get(':imdbID')
  @Render('movie-details')
  async findOne(@Param('imdbID') imdbID: string) {
    const movie = await this.moviesService.getMovieDetails(imdbID);
    if (!movie) {
      throw new NotFoundException('Movie not found');
    }
    return { movie };
  }
}
