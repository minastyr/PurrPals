
//change route names and filenames to match the actual routes
const direction1Router = require('./direction1-routes.js');
const direction2Router = require('./direction2-routes.js');
const direction3Router = require('./direction3-routes.js');
const direction4Router = require('./direction4-routes.js');

const express = require('express');
const router = express.Router();

router.use('/direction1', direction1Router);
router.use('/direction2', direction2Router);
router.use('/direction3', direction3Router);
router.use('/direction4', direction4Router);


module.exports = router;