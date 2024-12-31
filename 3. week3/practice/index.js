const express=require("express");
const jwt=require("jsonwebtoken");
const jwtpassword="123445";
const app=express();
app.use(express.json());
const  All_Users=[
    {
      username:"harkirat@gamil.com",
      userpasswors:"123",
      name:"harkirat singh"
    },
    {
        username:"sk@gmail.com",
        password:"123321",
        name:"ahmad"
    },
    {
        username:"sponge@gmail.com",
        password:"123321",
        name:"sonu"
    }
];
function userExist(username , password){
    let  userExist=false;
    for(let i=0 ; i<All_Users.length; i++){
        if(All_Users[i].username==username && All_Users[i].password==password){
            userExist=true;
        }
    }
    return userExist;
}
app.post("/signin",function(req , res){
    const username=req.body.username;
    const password=req.body.password;
    if(!userExist(username,password)){
        return res.status(403).json({
            msg:"Users does not exits in the memory db"
        }) ;
    }
    var token=jwt.sign({username:username},jwtpassword);
    return res.json({
        token,
    })
})
app.get("/users",function(req,res){
    const token=req.header.authorization;
    try{
        const token=req.headers.authorization;
        const decode=jwt.verify(token,jwtPassword);
        const username=decode.username;
         
    }catch(err){
        return res.status(403).json({
            msg:"Invalid Token"
        })
    }
})
app.listen(3000);
