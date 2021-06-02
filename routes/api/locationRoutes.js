const router = require("express").Router();
const locationController = require("../../controllers/locationController");

router
    .route("/:id")
    .get(locationController.findByID);

router
    .route("/:city")
    .get(locationController.findByCity);

module.exports = router;