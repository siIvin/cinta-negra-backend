const express= require('express')
const router = express.Router();
const {verifyToken} = require('../Middlewares');


router.use(require('./PublicRoutes'));


router.use(verifyToken);
router.use(require('./PrivateRoutes'));

module.exports = router