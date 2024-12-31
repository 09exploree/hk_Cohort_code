const fs=require("fs");

fs.readFile("01-async-js/medium/file.txt","utf-8", (err,data)=>{
   if(err){
      console.error(err);
   }
   else{
      const str=data;
      const newString=str.split(" ").filter( word => word!=="").join(" ");
      // console.log(newString);
      fs.writeFile("01-async-js/medium/file.txt",newString,(err)=>{
         if(err){
            console.log(err);
         }else{
            console.log("File cleaned and update successfully");
         }
      });
   }
});