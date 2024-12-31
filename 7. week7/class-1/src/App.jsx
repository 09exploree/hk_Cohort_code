import React,{Suspense} from 'react';
import {BrowserRouter, Route,Routes, useNavigate} from 'react-router-dom';
import './App.css'
// import  Dashboard  from './Components/Dashboard';
// import  Landing  from './Components/Landing';
const Dashboard=React.lazy( ()=>import("./Components/Dashboard"))
const Landing=React.lazy( ()=>import("./Components/Landing"))
function App() {
return(
  <div>

    {/* <div>
      <button onClick={()=>{
        window.location.href="/"
      }} >Landing page</button>
      <button onClick={()=>{
        window.location.href="/dashboard"
      }} >Dashboard</button>
    </div> */}

   

  <BrowserRouter>
  <Appbar/>
  {/* <Suspense fallback={<div>Lading...</div>}> */}
  <Routes> 
    <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>} />
    <Route path='/' element={<Suspense fallback={"loading..."}><Landing/></Suspense>} />
  </Routes>
  {/* </Suspense> */}
  
  </BrowserRouter>
  </div>
)
}
function Appbar(){
  const navigate=useNavigate()  
  return(
<div>
    <div>
  <button onClick={()=>{
    navigate("/")
  }} >Landing page</button>
  <button onClick={()=>{
    navigate("/dashboard")
  }} >Dashboard</button>
   </div>
</div>
    
  )
}

export default App
