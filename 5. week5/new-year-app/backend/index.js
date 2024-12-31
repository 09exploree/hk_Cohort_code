const express=require("express");
const { todo } = require("./db");
const { createTodo, updateTodo } = require("./types");
const cors=require("cors")
const app=express();
app.use(cors());
app.use(express.json())

app.post("/todo",async function(req,res){
    const createPayload=req.body;
    const parsePayload=createTodo.safeParse(createPayload)
    if(!parsePayload.success){
        res.status(411).json({
            msg:"You sent the wrong input"
        })
    return;
    }
    // put it in mongodb
    await todo.create({     
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"Todo created "
    })
})
// ==================================
// app.post("/todo", async function (req, res) {
//     const createPayload = req.body;
//     const parsePayload = createTodo.safeParse(createPayload);
//     if (!parsePayload.success) {
//         res.status(411).json({
//             msg: "You sent the wrong input",
//         });
//         return;
//     }

//     try {
//         const newTodo = await todo.create({
//             title: createPayload.title,
//             description: createPayload.description,
//             completed: false,
//         });
//         console.log("Todo created successfully:", newTodo); 
//         res.json({
//             msg: "Todo created",
//             todo: newTodo,
//         });
//     } catch (err) {
//         console.error("Error inserting todo:", err); 
//         res.status(500).json({
//             msg: "Error inserting todo",
//         });
//     }
// });
// =======================================

app.get("/todos",async function(req,res){
  const todos=await todo.find({})
  res.json({
    todos
  })
})


app.put("/completed",async function(req,res){
    const updatePayload=req.body;
    const parsePayload=updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"You send the wrong inputs"
        })
        return ;
    }
    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"Todo marked as completed"
    })
})

app.listen(3000);