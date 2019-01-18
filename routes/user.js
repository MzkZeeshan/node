const express = require('express');
const router= express.Router();

router.use("/",(re,res)=>console.log("add"));


module.exports=router;