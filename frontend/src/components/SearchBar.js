import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";

const SearchBar = ({ allMovies, setMovies }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (!searchTerm) {
      setMovies(allMovies); // Reset to full list when search is cleared
    }
  }, [searchTerm, allMovies, setMovies]);

  const handleSearch = () => {
    // Handle cases where `allMovies` is unavailable
    if (!allMovies || allMovies.length === 0) {
      console.error("No movies available for searching.");
      return;
    }

    // If search term is empty, reset movies list
    if (!searchTerm.trim()) {
      setMovies(allMovies);
      return;
    }

    const options = {
      keys: ["title", "description"], // Searchable fields
      threshold: 0.3, // Lower = stricter matching
      includeScore: true, // Optional: include scores to rank matches
    };

    const fuse = new Fuse(allMovies, options);
    const results = fuse.search(searchTerm).map((result) => result.item);

    if (results.length > 0) {
      setMovies(results); // Update movies with search results
    } else {
      console.warn("No matching movies found.");
      setMovies([]); // Clear movies if no match is found
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for movies or shows..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyUp={handleSearch} // Trigger search on keypress
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
