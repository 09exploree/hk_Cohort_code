const fs=require("fs");

fs.readFile("01-async-js/medium/file.txt","utf-8", (err,data)=>{
   if(err){
      console.error(err);