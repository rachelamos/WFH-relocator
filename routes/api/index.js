const router = require('express').Router();
const userRoutes = require('./userRoutes');
const locationRoutes = require('./locationRoutes');

router.use('/users', userRoutes);
router.user('/locations', locationRoutes);

module.exports = router;