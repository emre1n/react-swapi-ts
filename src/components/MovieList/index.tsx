import React from 'react';

import Movie from '../Movie';
import styles from './styles.module.css';
import { TMovie } from '../../libs/models/movie.model';

type TProps = { movies: TMovie[] };

const MovieList = ({ movies }: TProps) => {
  return (
    <ul className={styles['movies-list']}>
      {movies.map(movie => (
        <Movie
          id={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
