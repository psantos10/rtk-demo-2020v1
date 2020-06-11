import React from 'react';
import { Movie } from './types';

interface Props {
  movies: Movie[];
}

const Movies: React.FC<Props> = ({ movies }) => {
  return (
    <div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title} ({movie.year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
