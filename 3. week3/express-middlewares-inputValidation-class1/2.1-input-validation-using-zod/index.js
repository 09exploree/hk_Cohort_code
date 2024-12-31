// const express=require("express");
// const zod=require("zod");
// const app=express();

// const schema=zod.array(zod.number());



// app.use(express.json());

// app.post("/health-checkup",function(req,res){
//   const kidneys=req.body.kidneys;
//   const response=schema.safeParse(kidneys);
//   if(!response.success){
//     res.status(403).json({
//         msg:"input is invalid"
//     })
//   }else{
//     res.send({
//         response
//       })
//   }
  
// })

// app.listen(3000);

// =========================================
// create schema like this
// {
//     email:string =>email
//     password:atleast 8 letters
//     country:"IN","US"

// }

// soln.
// const schema=zod.object({
//     email:zod.string(),
//     password:zod.string(),
//     country:zod.literal("IN").or(zod.literal("US")),
//     kidneys:zod.array(zod.number())
// })


// ========================================
//  zod is independent of express it can use anywhere where we want to validate anytype
// example =>
    const zod=require("zod");
function validateInput(arr){
    const schema=zod.array(zod.number());
    const response=schema.safeParse(arr);
    console.log(response);
}
validateInput([1,2,4]); 