const express = require('express')
const app = express()
var cors = require('cors')
const mongoose=require('./Config/db')
var db = mongoose.connection;
db.once('open', function() {
console.log("we are connected");


  });
  app.use(cors());
app.listen(process.env.PORT || 3000,(req,res)=>console.log("server run"));
app.use('/',require('./routes/index.js'));