import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { useMemo } from 'react'

// function App() {
// const [counter,setCounter]=useState(0);
// const [inputValue,setInputValue]=useState(1);
// let count=0;
//   for(let i=0 ; i<=inputValue ; i++){
//     count=count+i;
//   }
  
// return(
//   <div>
//     <input onChange={ (e)=>{
//       setInputValue(e.target.value);
//     }} placeholder={"Find sum from  1 to given number"} />
//      <br />
//      Sum from 0 to {inputValue} is {count}
//      <br />
//     <button onClick={ ()=>{
//       setCounter(counter+1)
//     }} >Counter ({counter})</button>
//   </div>
// )
// }

// function App() {

//  const [counter,setCounter]=useState(0);
//  const [inputValue,setInputValue]=useState(1);
//  const [finalValue,setFinalValue]=useState(0);

// useEffect( ()=>{
//   let count=0;
//   for(let i=0 ; i<=inputValue ; i++){
//     count=count+i;
//   }
//   setFinalValue(count)
// },[inputValue])


// return(
//   <div>
//     <input onChange={ function(e){
//       setInputValue(e.target.value);
//     }} placeholder={"Find sum from  1 to given number"} />
//      <br />
//      Sum from 0 to {inputValue} is {finalValue}
//      <br />
//     <button onClick={ ()=>{
//       setCounter(counter+1)
//     }} >Counter ({counter})</button>
//   </div>
// )
// }


// function App() {
  
//   const [counter,setCounter]=useState(0);
//   const [inputValue,setInputValue]=useState(1);
 
//    const count=useMemo( ()=>{
//     let finalCount=0;
//     for(let i=0 ;i<=inputValue; i++){
//       finalCount+=i;
//     }
//     return finalCount
//    },[inputValue])
 
//  return(
//    <div>
//      <input onChange={ function(e){
//        setInputValue(e.target.value);
//      }} placeholder={"Find sum from  1 to given number"} />
//       <br />
//       Sum from 0 to {inputValue} is {finalValue}
//       <br />
//      <button onClick={ ()=>{
//        setCounter(counter+1)
//      }} >Counter ({counter})</button>
//    </div>
//  )
//  }


export default App
 