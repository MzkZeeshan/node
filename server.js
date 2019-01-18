const express = require('express')
const app = express()
const mongoose=require('./Config/db')
var db = mongoose.connection;
db.once('open', function() {
console.log("we are connected");


  });

app.listen("3000",(req,res)=>console.log("server run"));
app.use('/',require('./routes/index.js'));