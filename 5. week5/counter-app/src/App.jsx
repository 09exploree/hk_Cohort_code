
// import {useState} from "react"

//  function App() {
//    const [count , setCount]=useState(0);
//   function onClickHandler(){
//     setCount(count+1);
//   }

//    return (
//      <div>
//        <button onClick={onClickHandler}>Counter {count}</button>
//      </div>
//    )
//  }

// export default App


// =========================================================

//  function App() {
//    const [count , setCount]=useState(0);
//    return (
//      <div>
//        <CustomButton count={count} setCount={setCount}></CustomButton>
//      </div>
//    )
//  }
//  function CustomButton(props){
//   function onClickHandler(){
//     props.setCount(props.count+1);
//   }

//   return <button onClick={onClickHandler}> 
//     Counter {props.count}
//   </button>
//   // or 
//   // return React.createElement(
//   //   'button',
//   //   {onClicl:onButtonClick},
//   //   `Counter ${prop.count}` 
//   // )
//  }



// =========================================================


// todo Application 
// todo

// {
//   todo:[{title:"todo1",description:"First todo" , completed:false}]
// }

function App(){
  const [todos,setTodos]=useState([{
    title:"Go to gym",
    description:"Go to gym from 7-9",
    completed:false
  },{
    title:"Study DSA",
    description:"Study DSA from 9-12",
    completed:true
  }]);


  function addTodo(){
    setTodos([...todos,{
      title:"new Todo",
      description:"desc of new Todo"
    }])
  }
 
  return (
    <div>
      <button onClick={addTodo}>Add a random Todo</button>

       {/* <Todo title={todos[0].title} description={todos[0].description}></Todo>  
     <Todo title={todos[1].title} description={todos[1].description}></Todo>   */}
   { todos.map(function(todo){
      return <Todo title={todo.title} description={todo.description}/>
    })}
   </div>

  )
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}


export default App
