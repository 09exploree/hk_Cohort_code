const express=require("express");
const app=express();

const users=[{
    name:"John",
    kidney:[
        { healthy:false},
    ]
}];
app.use(express.json());

app.get("/",function(req,res){
    const johnKidneys=users[0].kidney;
    const numberkidneys=johnKidneys.length;   
    let numberOfHealthyKidney=0;
    for(let i=0 ; i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidney=numberOfHealthyKidney+1;

        }
    }
    const numberOfUnhealthyKidneys=numberkidneys-numberOfHealthyKidney;
    res.json({
        numberkidneys,
        numberOfHealthyKidney,
        numberOfUnhealthyKidneys
    });
     
})


app.post("/",function(req,res){
    const isHealthy=req.body.isHealthy;
    users[0].kidney.push({
        healthy:isHealthy
    });
    res.json({
        msg:"Done!"
    })
})

app.put("/",function(req,res){
for(let i =0 ; i<users[0].kidney.length;i++){
    users[0].kidney[i].healthy=true;
}
res.json({});
})

app.delete("/",function(req,res){
    if(isThereAtleastOneUnhealthyKidney()){ const newKindeys=[];
        for(let i=0 ; i<users[0].kidney.length;i++){
         if(users[0].kidney[i].healthy){
             newKindeys.push({
                 healthy:true
             });
         }
        }
        users[0].kidney=newKindeys;
        res.json({msg:"Done!"});
    }else{
        res.status(411).json({
            msg:"You have no bad kindneys"
        });
    }
  
})


function isThereAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney=false;
    for(let i=0 ; i<users[0].kidney.length ; i++){
        if(!users[0].kidney[i].healthy){
            atleastOneUnhealthyKidney=true;
        }
    }
    return atleastOneUnhealthyKidney;
}

app.listen(3000);



