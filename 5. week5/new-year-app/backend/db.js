/*
 Todo{
 title:string,
 description:string,
 completed:boolean
   }
 */

   const mongoose=require("mongoose"); 
   
   mongoose.connect("mongodb+srv://admin:password_123@cluster0.5tyec.mongodb.net/todo_app?retryWrites=true&w=majority&appName=Cluster0")
   const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
   })
   const todo=mongoose.model('todos',todoSchema)
   module.exports={
    todo
   }

  //  mongoose
  //   .connect("mongodb+srv://admin:password_123@cluster0.5tyec.mongodb.net/todo_app?retryWrites=true&w=majority&appName=Cluster0", {
  //       useNewUrlParser: true,
  //       useUnifiedTopology: true,
  //   })
  //   .then(() => console.log("Connected to MongoDB"))
  //   .catch((err) => console.error("Failed to connect to MongoDB:", err));
