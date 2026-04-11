import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function MovieDetails({ apiKey }) {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
      .then(res => res.json())
      .then(data => setMovie(data))
      .catch(err => console.error(err));
  }, [id, apiKey]);

  if (!movie) return <div className="loader">Loading details</div>;

  const imagePath = movie.backdrop_path || movie.poster_path;
  const heroImage = imagePath
    ? `https://image.tmdb.org/t/p/original${imagePath}`
    : 'https://via.placeholder.com/1280x720?text=No+Image';

  return (
    <div className="details-page">
      <div 
        className="hero-banner" 
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <Link to="/" className="back-button">← Back</Link>
            <h1 className="detail-title">{movie.title}</h1>
            <p className="detail-overview">{movie.overview}</p>
            <button className="play-button">Play</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;