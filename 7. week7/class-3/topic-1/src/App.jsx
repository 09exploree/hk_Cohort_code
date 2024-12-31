import { useContext } from "react"
import { CountContext } from "./components/context";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector, evenValueSelector } from "./store/atoms/count";
// RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState

function App() {

  return(
    <div>
       <RecoilRoot>
      <Count />
       </RecoilRoot>
    </div>
  )
}
function Count(){
  return(
    <div>
      <CountRenderer />
      <Buttons />
      <EvenCountRenderer />
      
    </div>
  )
}
  function CountRenderer(){
    const count=useRecoilValue(countAtom);
    return <div>
      {count}
    </div>
  }
function Buttons(){
  // const [count,setCount]=useRecoilState(countAtom);
  const setCount=useSetRecoilState(countAtom);
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
// function EvenCountRenderer(){
//   const count=useRecoilValue(countAtom);
//   return <div>
//     {(count%2===0)?`Even Value : ${count}`:null}
//   </div>
// }

// function EvenCountRenderer(){
//   const count=useRecoilValue(countAtom);
//   // const isEven=(count%2==0);
//   const isEven=useMemo(()=>{   //more optimal
//     return count%2==0;
//   },[count])

//   return <div>
//     {isEven?"It is Evene":null};
//   </div>
// }

function EvenCountRenderer(){
  const isEven=useRecoilValue(evenSelector);
  return <div>
    {isEven?"It is Even":null}
  </div>
}

function EvenValueRenderer(){
  const evenValue=useRecoilValue(evenValueSelector);
  return <div>{evenValue}</div> 
}

export default App
