import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import { fetchAllMovies } from "../api";
import MovieCard from "../components/MovieCard"
const Home = () => {
  const [allMovies, setAllMovies] = useState([]); // All movies fetched
  const [filteredMovies, setFilteredMovies] = useState([]); // Filtered results

  useEffect(() => {
    // Fetch movies from the server (adjust URL as needed)
    const fetchMovies = async () => {
      try {
        // const response = await fetch("http://localhost:5000/api/movies/all");
        // const data = await response.json();
        const { data } = await fetchAllMovies();

        setAllMovies(data); // Populate allMovies
        setFilteredMovies(data); // Initially show all movies
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="home">
      <SearchBar allMovies={allMovies} setMovies={setFilteredMovies} />
      <div className="movies-grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
