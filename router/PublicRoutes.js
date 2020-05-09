const express= require('express');
const router = express.Router();

router.use(require('./AuthRoutes'));
router.use(require('./BookRoutes'));//estas deben ser privadas

module.exports = router