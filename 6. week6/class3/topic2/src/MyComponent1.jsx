import React,{useEffect,useMemo} from 'react'
import { useState } from 'react';
function MyComponent1(){
   const [exchange1Data,setExchange1Data]=useState({})
   const [exchange2Data,setExchange2Data]=useState({})
   const [bankData,setBankData]=useState({});

   useEffect(()=>{
    setExchange1Data({
        returns:100
    })
   },[])
   useEffect(()=>{
    setExchange2Data({
        returns:100
    })
   },[])

   useEffect(()=>{
    setTimeout(()=>{
        setBankData({
            income:100
        }); 
    },5000)
   },[])

   const cryptoReturns=()=>{

       console.log("hii there before")
       const cryptoReturns=exchange1Data.returns+exchange2Data.returns;
       console.log("hii there after")
       const incomeTax=(cryptoReturns+bankData.income)*0.3; 
   }


   return(
    <div>
        hii there , your income tax returns are: {incomeTax}
    </div>
   )
}
export default MyComponent1;