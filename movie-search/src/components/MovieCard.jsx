import React from 'react';
import "../stylesheet/card.css"

function MovieCard({ movie }) {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <div className="movie-card">
      <img src={imageUrl} alt={movie.title} />
      <div className="movie-details">
        <h2>{movie.title}</h2>
        <p>{movie.release_date}</p>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieCard;
