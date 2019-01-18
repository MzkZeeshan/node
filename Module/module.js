const mongoose= require("mongoose");
const data = new mongoose.Schema({
    toDo: String
  });
 const TodoData = mongoose.model('To-do', data);
 module.exports=TodoData;