import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import './stylesheet/App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const searchMovies = async (query) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=3fba11e4b2eb141a3f5bbb67adba93af&query=${query}`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.error('Error fetching movie data: ', error);
    }
  };

  return (
    <div className="App">
      <h1>Movie Search</h1>
      <SearchBar searchMovies={searchMovies} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
