const { Router } = require('express');
const authRoutes = require('./auth-routes.js');
const apiRoutes = require('./api/index.js');
const { authenticateToken } = require('../middleware/auth.js');

const router = Router();

router.use('/auth', authRoutes);
router.use('/api', apiRoutes);

module.exports = router;