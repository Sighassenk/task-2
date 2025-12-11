const Movie = require("../models/movie");

// CREATE MOVIE
exports.createMovie = async (req, res) => {
  try {
    const movie = await Movie.create({
      name: req.body.name,
      description: req.body.description,
      user: req.user.id
    });

    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: "Error creating movie" });
  }
};

// GET ONLY MY MOVIES
exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find({ user: req.user.id });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ message: "Error fetching movies" });
  }
};

// GET SINGLE MOVIE
exports.getMovie = async (req, res) => {
  try {
    const movie = await Movie.findOne({ _id: req.params.id, user: req.user.id });
    if (!movie) return res.status(404).json({ message: "Movie not found" });
    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: "Error fetching movie" });
  }
};

// UPDATE MY MOVIE
exports.updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      {
        name: req.body.name,
        description: req.body.description
      },
      { new: true }
    );

    if (!movie) return res.status(404).json({ message: "Movie not found" });

    res.json(movie);
  } catch (err) {
    res.status(500).json({ message: "Error updating movie" });
  }
};

// DELETE MY MOVIE
exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id
    });

    if (!movie) return res.status(404).json({ message: "Movie not found" });

    res.json({ message: "Movie deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting movie" });
  }
};
