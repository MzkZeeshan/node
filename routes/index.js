const express = require('express');
const router= express.Router();
router.use('/add',require("./add.js"));
router.use('/get',require("./get.js"));


module.exports = router;