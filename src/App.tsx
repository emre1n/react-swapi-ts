import React, { useState } from 'react';

import MoviesList from './components/MovieList';
import './App.css';
import { TMovie } from './libs/models/movie.model';

function App() {
  const [movies, setMovies] = useState<TMovie[] | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [moviesLength, setMoviesLength] = useState(0);

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    const response = await fetch('https://swapi.dev/api/films');
    const result = await response.json();

    const transformedMovies: TMovie[] = result.results.map((movieData: any) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    setMovies(transformedMovies);
    setMoviesLength(movies ? movies.length : 0);
    console.log(transformedMovies);
    setIsLoading(false);
  };

  // const dummyMovies: TMovie[] = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && moviesLength >= 0 && <MoviesList movies={movies} />}
        {!isLoading && moviesLength === 0 && <p>Found no movies.</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </>
  );
}

export default App;
