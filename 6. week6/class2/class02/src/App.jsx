import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
// function App() {

//   const [todos,setTodos]=useState([]);

//   // useEffect( ()=>{
//   //   fetch("https://jsonplaceholder.typicode.com/todos")
//   //     .then( async function(res){
//   //     const json=await res.json();
//   //     setTodos(json)
//   //    })
//   // },[])
 
//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/todos")
//       .then((response) => {
//         setTodos(response.data); 
//       })
//   }, []);
  
  
//   return (
//     <>
//       {todos.map( (todo)=>{
//            return <Todo 
//            key={todo.id}
//            title={`"title":${todo.title}`}
//             description={`"description":${todo.id}`} 
//             />
//       })}
//     </>
//   )
// }
// function Todo({key,title,description}){
//   return (
//     <div>
//       <h3>{key}</h3>
//       <h5>{title}</h5>
//       <h5>{description}</h5>
//     </div>
//   )
// }

function App() {
  const [selectedId,setSelectedId]=useState(1); 
  return (
    <div>

      <button onClick={function(){
        setSelectedId(1)
      }}>1</button>
      <button onClick={function(){
        setSelectedId(2)
      }} >2</button>
      <button onClick={function(){
        setSelectedId(3)
      }} >3</button>
      <button onClick={function(){
        setSelectedId(4)
      }} >4</button>
      <Todo  id={selectedId}/>
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({}); 

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos?id=${id}`) 
      .then(function (response) {
        if (response.data.length > 0) {
          setTodo(response.data[0]); 
          }
      })
      .catch((error) => console.error("Error fetching data:", error)); 

  }, [id]); 
  return (
    <div>
      id:{id}
      <h1>{todo.title}</h1>
      <h2>{todo.id}</h2>    
    </div>
  );
}

export default App
