import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <div style={{display:'flex',  justifyContent:'space-around'}}> 
      <div style={{backgroundColor:'red'}}>Hiii</div>
      <div style={{backgroundColor:'green'}}>Hello</div>
      <div style={{backgroundColor:'purple'}}>Bye</div>
    </div> */}
    {/* <div className='flex'> 
      <div className='bg-blue-200'>Hiii</div>
      <div className='bg-yellow-500'>Hello</div>
      <div style={{backgroundColor:'purple'}}>Bye</div>

    </div> */}

    {/* <div className='grid grid-cols-10'>
      <div className='bg-yellow-500 col-span-4'>Hii</div>
      <div className='bg-green-100 col-span-4'>Hello</div>
      <div className='bg-purple-400 col-span-2'>Ki hal</div>
    </div> */}

    {/* method 2 */}
    {/* <div className='flex'>
      <div className='bg-yellow-500 w-[40%]'>Hii</div>
      <div className='bg-green-100 w-[40%]'>Hello</div>
      <div className='bg-purple-400 w-[20%]'>Ki hal</div>
    </div> */}

    {/* <div className='bg-red-300 md:bg-blue-400'>Hii there</div> */}

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1  '>
        <div className='bg-blue-400 col-span-1'>Hii there</div>
        <div className='bg-blue-400 col-span-1'>Hii there</div>
        <div className='bg-red-400 col-span-1' >Hii there</div>
        <div className='bg-red-400 col-span-1' >Hii there</div>
        <div className='bg-purple-400 col-span-1'>Hii there</div>
        <div className='bg-purple-400 col-span-1'>Hii there</div>
        <div className='bg-green-400 col-span-1'>Hii there</div>
        <div className='bg-green-400 col-span-1'>Hii there</div>
      </div>

    
    </>
  )
}

export default App
