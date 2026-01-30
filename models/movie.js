const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  image: { type: String }
});

module.exports = mongoose.model("Movie", movieSchema);