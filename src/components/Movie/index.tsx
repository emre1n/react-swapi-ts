import React from 'react';

import styles from './styles.module.css';
import { TMovie } from '../../libs/models/movie.model';

type TProps = TMovie;

const Movie = ({ id, title, releaseDate, openingText }: TProps) => {
  return (
    <li key={id} className={styles.movie}>
      <h2>{title}</h2>
      <h3>{releaseDate}</h3>
      <p>{openingText}</p>
    </li>
  );
};

export default Movie;
