const express=require("express");
const router=express.Router();
const Tododata = require("../Module/module")
// const bcrypt = require("bcrypt")
function hashPassword()
{
    var salt = bcrypt.genSaltSync(saltRounds);
var hash = bcrypt.hashSync(Password, salt);
}


router.post('/', (req,res)=>
{ console.log("register");

// const pHash = hashPassword(req.body.psd);


const add=new Tododata({
    email : req.body.email,
    psd : req.body.psd
})
add.save()
.then(()=>{ res.send({message :"user inserted Sucessfully"}); console.log("done")})
.catch(e => res.send({message: 'Error'+e.message}))

})

router.post('/',async (req, res)=>
{ console.log("login");

const user=await Tododata.find({email : req.body.email})

if(!user)
{
    return res.send(500,"no user");

}
const check = bcrypt.compareSync(req.body.psd,user[0].psd)

if(!check)
{
    return res.send("500 ")
}
})



module.exports=router;