import React from 'react';

import MoviesList from './components/MovieList';
import './App.css';
import { TMovie } from './libs/models/movie.model';

function App() {
  const dummyMovies: TMovie[] = [
    {
      id: 1,
      title: 'Some Dummy Movie',
      openingText: 'This is the opening text of the movie',
      releaseDate: '2021-05-18',
    },
    {
      id: 2,
      title: 'Some Dummy Movie 2',
      openingText: 'This is the second opening text of the movie',
      releaseDate: '2021-05-19',
    },
  ];
  return (
    <>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={dummyMovies} />
      </section>
    </>
  );
}

export default App;
