const fs=require("fs");
fs.writeFile("C:/Users/shkha/OneDrive/Desktop/Cohort 2.o/assignments-master/week-2/01-async-js/easy/3-a.txt",
    'This is the content to write',"utf-8", 
    (err)=>{
        if(err){
            console.error(err);
        }else{
            console.log("File written successfully"); 
        }
    })