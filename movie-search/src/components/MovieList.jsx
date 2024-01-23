import React from 'react';
import MovieCard from './MovieCard';
import '../stylesheet/list.css';

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
