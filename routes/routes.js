const adminController = require('../controller/controller');

const express = require('express');
const router = express.Router();



router.get("/", adminController.callbackHome)
router.get("/about", adminController.callbackAbout)
router.get("/contact", adminController.callbackContact)


module.exports = router;
