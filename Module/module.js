// const mongoose= require("mongoose");
// const data = new mongoose.Schema({
//     toDo: String
//   });
//  const TodoData = mongoose.model('To-do', data);
//  module.exports=TodoData;


 const mongoose = require("mongoose");
const data = new mongoose.Schema({
  email:String,
  psd:{type : String, unique : true}
  });
 const TodoData = mongoose.model('To-do', data);
 module.exports=TodoData;