import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
let counter=4;
function App() {
  const [todos,setTodos]=useState([{
    id:1,
    title:"go to gym",
    description:"go to gym today"
  },
  {
    id:2,
    title:"eat food",
    description:"eat food"
  },{
    id:3,
    title:"go to class",
    description:"go to class today"
  },
]);
  
  function addTodo(){
    setTodos([...todos,{
      id:counter++,
      title:Math.random(),
        description:Math.random()
      }])
    // or
    // const newTodos=[];
    // for(let i=0 ; i<todos.length ;i++){
    //   newTodos.push(todos[i])
    // }
    // newTodos.push({
    //   id:4,
    //   title:Math.random(),
    //   description:Math.random()
    // })
    // setTodos(newTodos);
  }

  return (
       <div>
        <button onClick={addTodo}>Add a Todo</button>
        {/* {todos.map(todo=> <Todo title={todo.title} description={todo.description}></Todo>)} */}
        {todos.map(function(todo){
          return <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>
        })}
       </div>
  )
}
function Todo({title,description}){
  return(
 <div>
  <h1>{title}</h1>
  <h5>{description}</h5>
 </div>
  )
}

export default App
