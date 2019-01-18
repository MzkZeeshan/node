const express=require("express");
const router=express.Router();
const Tododata = require("../Module/module")
router.post('/', (req,res)=>
{ console.log("add");
const add=new Tododata(req.body)
add.save()
.then(()=>{ res.send({message :"user inserted Sucessfully"}); console.log("done")})
.catch(e => res.send({message: 'Error'+e.message}))

})

module.exports=router;