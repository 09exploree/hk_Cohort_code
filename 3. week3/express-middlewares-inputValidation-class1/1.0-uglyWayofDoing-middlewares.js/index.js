// const express=require("expess");

// const app=express();
//  app.get("/health-checkup",function( req,res ){
//     const username=req.headers.username;
//     const password=req.headers.password;
//     const kidneyId=req.query.kidneyId;
//     if(username==='ahmad' && password==="pass"){
//         if(kidneyId===1 || kidneyId===2){ 
//     req.json({
//         msg:"Your kidney is fine!"
//     });
//    }
//   }  

//   res.status(400).json( { "msg":"Something up with yours input"});

//  });


const express = require("express");

const app = express();

app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = parseInt(req.query.kidneyId); 
// authentication
  if (!(username === "ahmad" && password === "pass")) {
    res.status(400).json({ msg: "Something up with your input" });
    return;
  }
  
// input validation
  if (kidneyId !== 1 && kidneyId !== 2) {
    res.status(400).json({ msg: "Something up with your input" });
    return;
  }

  res.json({
    msg: "Your kidney is fine!",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
