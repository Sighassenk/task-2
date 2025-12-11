const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddelware");
const movieController = require("../controllers/movieController");

// All routes require authentication
router.use(authMiddleware);

router.post("/", movieController.createMovie);
router.get("/", movieController.getMovies);
router.get("/:id", movieController.getMovie);
router.put("/:id", movieController.updateMovie);
router.delete("/:id", movieController.deleteMovie);

module.exports = router;
