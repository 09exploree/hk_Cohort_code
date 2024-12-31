const expres=require("express");
const app=express();

function userMiddleWare(req,res,next){
   const username=req.headers.username;
   const password=req.headers.password;
   if(username!=="ahmad" || password!=="pass"){
    res.status(403).json({
        msg:"Incorrect Input"
    })
   }else{
    next();
   }
}
function kidneyMiddleWare(req,res,next){
  const kidneyId=parseInt(req.query.kidneyId);
  if(kidneyId!=1 && kidneyId!=2){
    res.status(403).json({
        msg:"Incorrect Input"
      })
  }else{
    next();
  }
};
app.get("/health-checkup",userMiddleWare,kidneyMiddleWare,function(req,res){
res.send("Your kidney is working fine");
})