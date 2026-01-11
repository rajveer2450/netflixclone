import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Browse({ apiKey,query }) {
  const [movies, setMovies] = useState([]);  
  

  useEffect(() => {
    const url = query ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`: `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`; 

    axios.get(url)
      .then(res => setMovies(res.data.results))
      .catch(err => console.error(err));
  }, [query, apiKey]);

  return (
    <div className="browse-wrapper">
      
      <div className="movie-grid">
        {movies.map(movie => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-card">
            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title} 
              className="poster-img"
            />
            <p>{movie.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Browse;
// 28cf011b483c183c7864627c779979e1