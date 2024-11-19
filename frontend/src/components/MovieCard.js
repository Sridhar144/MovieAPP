import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div className="movie-card" onClick={() => navigate(`/movie/${movie.id}`)}>
      <img src={movie.poster_url} alt={movie.title} />
      <h3>{movie.title}</h3>
    </div>
  );
};

export default MovieCard;
