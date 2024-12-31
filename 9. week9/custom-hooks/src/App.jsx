import { useEffect, useState } from 'react'
import './App.css'
import {  useFetch, usePostTitle } from './hooks/useFetch'
import { usePrev } from './hooks/use-prev';
import { useRef } from 'react';
import useDebounce from './hooks/useDebounce';
// useFetch hook=>

// function App() {
// //  const postTitle=usePostTitle();
// const [currentPost,setCurrentPost]=useState(1);
// const {finalData,loading}=useFetch("https://jsonplaceholder.typicode.com/posts/"+currentPost)

//    if(loading){
//     return <div>
//       Loading...
//     </div>
//    }

//  return (
//   <div>
//     <button onClick={()=>setCurrentPost(1)}>1</button>
//     <button onClick={()=>setCurrentPost(2)}>2</button>
//     <button onClick={()=>setCurrentPost(3)}>3</button>
//     {JSON.stringify(finalData)}
//     </div>
//  ) 
// }
// function App() {

// const [state,setState]=useState(0);
// const prev=usePrev(state);

//  return (
//   <>
//     <p>{state}</p>
//     <button onClick={()=>{
//       setState((curr)=>curr+1)
//     }}>Click Me</button>
//     <p>The previous value was {prev}</p>
//     </>
//  ) 
// }


  

function App() {

  const [inputVal,setInputVal]=useState()
  const debouncedValue=useDebounce(inputVal);
  function change(e){
    setInputVal(setInputVal(e.target.value))
  }
  useEffect(()=>{
    console.log("expensive operation");
  },[debouncedValue])

 return (
  <>
  <input type="text" onChange={change} />
 </>
 ) 
}

export default App
 