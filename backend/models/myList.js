const mongoose = require("mongoose");

const myListSchema = new mongoose.Schema({
  movieId: { type: Number, required: true },
  status: { type: String, enum: ["To Watch", "Watched"], required: true },
});

module.exports = mongoose.model("MyList", myListSchema);
