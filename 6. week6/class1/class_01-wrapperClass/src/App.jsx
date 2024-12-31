import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App() {

//   return (
//     <div>
//       <CardWrapper innerComponent={<TextComponent/>}></CardWrapper>
//     </div>
//   )
// }

// function CardWrapper({innerComponent}){
//     return (
//       <div style={ {border:"2px solid black"}}>
//         {innerComponent}
//       </div>
//     )
// }

// function TextComponent({}){
//   return (
//     <div>
//      Hii there
//     </div>
//   )
// }
// ==============================

function App() {

  return  (
    <div>
      <CardWrapper>
        Hii there 
      </CardWrapper>
    </div>
  )
}

function CardWrapper({children}){
    return (
      <div style={ {border:"2px solid black"}}>
        {children}
      </div>
    )
}


export default App
