import React, { useRef } from 'react';
import { TMovie } from '../../libs/models/movie.model';

import styles from './styles.module.css';
import { v4 as uuidv4 } from 'uuid';

type TProps = { onAddMovie: (movie: TMovie) => void };

function AddMovie({ onAddMovie }: TProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const openingTextRef = useRef<HTMLTextAreaElement>(null);
  const releaseDateRef = useRef<HTMLInputElement>(null);

  function submitHandler(event: any) {
    event.preventDefault();

    // could add validation here...

    const movie: TMovie = {
      id: uuidv4(),
      title: titleRef.current?.value || '',
      openingText: openingTextRef.current?.value || '',
      releaseDate: releaseDateRef.current?.value || '',
    };

    onAddMovie(movie);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea rows={5} id="opening-text" ref={openingTextRef}></textarea>
      </div>
      <div className={styles.control}>
        <label htmlFor="date">Release Date</label>
        <input type="text" id="date" ref={releaseDateRef} />
      </div>
      <button>Add Movie</button>
    </form>
  );
}

export default AddMovie;
