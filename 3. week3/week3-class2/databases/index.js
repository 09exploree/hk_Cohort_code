
// // connecting to the mogodb database 

// const mogoose = require("mongoose");
// mogoose.connect("mongodb+srv://admin:password_123@cluster0.5tyec.mongodb.net/userapp?retryWrites=true&w=majority&appName=Cluster0");
// const User=mogoose.model('Users',{name:String,email:String , password:String})

// const user=new User({
//     name:"Shaikh Ahmad" ,
//    email:"sk@gmail.com" ,
//    password:"sk"  
//   })
// user.save();

const express=require("express");
const app=express();
app.use(express.json());
const mogoose = require("mongoose");


mogoose.connect("mongodb+srv://admin:password_123@cluster0.5tyec.mongodb.net/userapp?retryWrites=true&w=majority&appName=Cluster0");
const User=mogoose.model('Users',{name:String,email:String , password:String})

app.post("/signup", async function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    const name=req.body.name;

    const userExists=await User.findOne({email:username})
    if(userExists){
       return res.status(400).json({
           msg:"User already exists"
       }) 
    }
    const user=new User({
        name:name ,
       email:username,
       password:password      
      });
    user.save();
    res.json({
        msg:"User created successfully"

    })
})

