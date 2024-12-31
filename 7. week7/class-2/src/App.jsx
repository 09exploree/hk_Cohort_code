// import { useState } from "react"

// function App() {
//   const [count,setCount]=useState(0);
//   return(
//     <div>
//       <Count count={count} setCount={setCount}/>
//     </div>
//   )
// }
// function Count({count,setCount}){
//   return(
//     <div>
//       {count}
//       <Buttons count={count} setCount={setCount} />
//     </div>
//   )
// }
// function Buttons({count,setCount}){
//   return(
//     <div>
//       <button onClick={()=>{
//         setCount(c=>c+1)
//       }} >Increase</button>
//       <button onClick={()=>{
//         setCount(c=>c-1)
//       }} >Decrease</button>
//     </div>
//   )
// }

// export default App

import { useContext, useState } from "react"
import { CountContext } from "./Context";

function App() {
  // wrap anyone that wants to use the teleported value inside the provider

  const [count,setCount]=useState(0);
  return(
    <div>
      <CountContext.Provider value={count}>
      <Count setCount={setCount}/>
      </CountContext.Provider>
    </div>
  )
}
function Count({setCount}){
  return(
    <div>
      <CountRenderer />
      <Buttons  setCount={setCount} />
    </div>
  )
}
  function CountRenderer(){
    const count=useContext(CountContext)
    return <div>
      {count}
    </div>
  }
function Buttons({setCount}){
  const count=useContext(CountContext);
  return(
    <div>
      <button onClick={()=>{
        setCount(c=>c+1)
      }} >Increase</button>
      <button onClick={()=>{
        setCount(c=>c-1)
      }} >Decrease</button>
    </div>
  )
}

export default App
