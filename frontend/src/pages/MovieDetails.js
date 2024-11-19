import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails, addToMyList } from "../api";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const { data } = await fetchMovieDetails(id);
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    fetchDetails();
  }, [id]);

  const handleAddToList = async (status) => {
    try {
      await addToMyList(movie.id, status);
      alert(`Added to ${status} list successfully!`);
    } catch (error) {
      console.error("Error adding to list:", error);
    }
  };

  if (!movie) return <div className="loading">Loading...</div>;

  return (
    <div className="movie-details">
      <div className="movie-poster">
        <img src={movie.poster_url} alt={movie.title} />
      </div>
      <div className="movie-info">
        <h1>{movie.title}</h1>
        <p className="movie-description">{movie.description}</p>
        <div className="action-buttons">
          <button onClick={() => handleAddToList("To Watch")}>Add to "To Watch"</button>
          <button onClick={() => handleAddToList("Watched")}>Add to "Watched"</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
