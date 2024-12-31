import { useEffect, useState } from 'react'

// function App() {
//   useEffect(function(){
//     alert("hii");
//   },[])

//   return (
//     <div>
//       hii there
//     </div>
//   )
// }

function App(){
  const [todos,setTodos]=useState([]);
  useEffect(function(){
    fetch("some link to fetch")
     .then(async function(res){
      const json=await res.json();
      setTodos(json.todos);
     })
  },[])
  return (
    <div>
      {todos.map(todo =><Todo title={todo.title} description={todo.description} />)}
    </div>
  )
}
function Todo({title,description}){
  return (
    <div>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>
  )
}

export default App
