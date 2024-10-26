import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  if (!movie) return <p>Loading...</p>; // Add this guard

  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </Link>
    </div>
  );
}

export default MovieCard;
