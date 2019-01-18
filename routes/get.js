const mongoose=require('mongoose');
const express=require('express');
const router=express.Router();
const Tododata=require('../Module/module')

router.use('/',(req,res)=> 
{
 console.log("done");
Tododata.find({})
// .then((r)=>res.json({message : r}))
.then((re)=>res.send({message : re}))
.catch(e => res.send({ message : "message of th"+e.message})) } )


module.exports=router;