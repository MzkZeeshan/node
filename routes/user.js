const express = require('express');
const router= express.Router();

router.use("/",(re,res)=>console.log("add"));

router.use("/del",(re,res)=>console.log("delete"));

router.use("/up",(re,res)=>console.log("update"));

module.exports=router;