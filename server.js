require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require("./routes/auth");
const movieRoutes = require("./routes/movies");

app.use("/uploads", express.static("uploads"));

app.use("/api", authRoutes);
app.use("/api/movies", movieRoutes);

// Basic route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
