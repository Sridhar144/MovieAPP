const axios = require("axios");
const MyList = require("../models/myList");

const API_BASE_URL = "https://api.rapidmock.com/api/vikuman/v1";

exports.getAllMovies = async (req, res) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movies/all`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies." });
  }
};

exports.getMovieDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${API_BASE_URL}/movies`, { params: { id } });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movie details." });
  }
};

exports.addToMyList = async (req, res) => {
  const { movieId, status } = req.body;
  try {
    const newEntry = new MyList({ movieId, status });
    await newEntry.save();
    res.status(201).json({ message: "Movie added to list successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add to My List." });
  }
};

exports.getMyList = async (req, res) => {
  try {
    const myList = await MyList.find();
    res.status(200).json(myList);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch My List." });
  }
};
