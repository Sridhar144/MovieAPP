import axios from "axios";

const API_BASE_URL = "https://moviesmern.onrender.com/api/movies";

export const fetchAllMovies = () => axios.get(`${API_BASE_URL}/all`);
export const fetchMovieDetails = (id) => axios.get(`${API_BASE_URL}/${id}`);
export const addToMyList = (movieId, status) =>
  axios.post(`${API_BASE_URL}/add`, { movieId, status });
export const fetchMyList = () => axios.get(`${API_BASE_URL}/mylist`);
