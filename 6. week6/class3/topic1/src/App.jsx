import { useEffect, useState } from 'react'

function App() {
  const [exchangeData,setExchangeData]=useState({});
  const [bankData,setBankData]=useState({});

  console.log("Hii there re-render")

useEffect(function(){
  setTimeout( ()=>{
    setBankData({income:100})
  },3000)
},[])

  useEffect( function(){
    setTimeout( ()=>{
      setExchangeData({
        returns:1000
      })
    },1000)
  },[])
  
  const incomeTax=(bankData.income+exchangeData.returns)*0.3;

  return (
    <div>
      hii there , your income tax returns are {incomeTax}
    </div>
  )
}

export default App
