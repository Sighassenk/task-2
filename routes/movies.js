const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddelware");
const movieController = require("../controllers/movieController");
const upload = require("../middleware/upload");

// All routes require authentication
router.use(authMiddleware);

router.post("/", upload.single("image"), movieController.createMovie);
router.get("/", movieController.getMovies);
router.get("/:id", movieController.getMovie);
router.put("/:id", upload.single("image"), movieController.updateMovie);
router.delete("/:id", movieController.deleteMovie);

module.exports = router;
