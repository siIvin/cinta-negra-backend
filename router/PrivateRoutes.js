const express = require('express');
const router = express.Router();


router.use(require('./UserRoutes'));
router.use(require('./BookRoutes'));//estas deben ser privadas
router.use(require('./StudentRoutes'));//estas deber ser privadas

module.exports = router;