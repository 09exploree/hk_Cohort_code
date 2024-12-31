import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { Fragment } from 'react'; 


  // function App() {
  //   const [title,setTitle]=useState("My name is Ahmad");
  //   function updateTitle(){
  //     setTitle("My name is "+Math.random())
  //   }

  //   return ( 
  //   <>
  //     <button onClick={updateTitle}>Update the title</button>
  //     <Header title={title}></Header>
  //     <Header title="Ahmad"></Header>
  //   </>
  //   )
  
  // }

  // function Header({title}){
  //   return (
  //     <div>
  //       {title}
  //     </div>
  //   )
  // }
  
  
  function App(){
    return(
      <>
        <HeaderWithButton/>
        <Header title="Sk"></Header>
        <Header title="AHMAD"></Header>
      </>
    )
  }
 function HeaderWithButton(){
  const [title , setTitle]=useState("My name is Ahmad");
  function  updateTitle(){
    setTitle("My name is "+Math.random());
  }
  return (
    <div>
      <button onClick={updateTitle}>Update Title</button>
      <Header title={title}></Header>
    </div>
  )
 }
//  function Header({title}){
//   return (
//     <div>
//       {title}
//     </div>
  // )
//  }
  const Header=React.memo( function Header({title}){
    return (
      <div>
        {title}
      </div>
    )
   })
  export default App


