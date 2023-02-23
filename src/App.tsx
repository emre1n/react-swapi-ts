import React, { useState } from 'react';

import MoviesList from './components/MovieList';
import './App.css';
import { TMovie } from './libs/models/movie.model';

function App() {
  const [movies, setMovies] = useState<TMovie[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const result = await response.json();
      console.log('result parsed', result);
      const transformedMovies: TMovie[] = result.results.map(
        (movieData: any) => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
        }
      );
      setMovies(transformedMovies);
      console.log('transformed', transformedMovies);
    } catch (error: any) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  let content = <p>Found no movies.</p>;

  if (movies?.length) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

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
      <section>{content}</section>
    </>
  );
}

export default App;
