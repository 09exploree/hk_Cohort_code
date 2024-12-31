import { useState } from 'react'
import './App.css'

function useCounter(){
  const [count,setCount]=useState(0);
  function incrementCount(){
    setCount(count+1)
  }
  return {
    count:count,
    incrementCount:incrementCount
  }
}

function App() {

  return (
    <div>
      <Counter />
      <Counter />
      <Counter />
    </div>
  )
}
function Counter(){
  const {count,incrementCount}=useCounter();
  return(
    <div onClick={incrementCount}>
      <button onClick={incrementCount}>Increase {count}</button>      
    </div>
  )
}

export default App
