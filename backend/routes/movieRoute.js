const express = require("express");
const {
  getAllMovies,
  getMovieDetails,
  addToMyList,
  getMyList,
} = require("../controllers/movieController");

const router = express.Router();

router.get("/all", getAllMovies);
router.get("/:id", getMovieDetails);
router.post("/add", addToMyList);
router.get("/mylist", getMyList);

module.exports = router;
