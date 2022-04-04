const mongoose = require ("mongoose");

mongoose.connect("mongodb://localhost:27017/loginfo",{
NewUrlParser:true,
useUnifiedTopology:true,
useCreateIndex:true

}).then(()=>{
    console.log("Connected Successfully");

}).catch((e)=>{
    console.log("Connetion Failed");

})
const Register = new.mongoose.model("connection",loginfo); 
module.exports = connection;
