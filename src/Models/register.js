const mongoose = require ("mongoose");
const registraioninfo = new mongoose.registraioninfo({

     firstname :{
         type:string,
         required: true
     },
     lastname :{
         typr:string,
         required: true
     },
     email :{
        typr:string,
        required: true,
        unique:true,
    }, 
     gender :{
        typr:string,
        required: true,
     },
     email :{
        typr:Number,
        required: true,
       
     }, 
     age :{
        typr:Number,
        required: true,
       
     }, 
     password :{
        typr:string,
        required: true,
       
     },
     confirmpassword :{
        typr:string,
        required: true,
       
     }
    
     
})

const Register = new.mongoose.model("Register",loginfo); 
module.exports = Register;