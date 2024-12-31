import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from "./atoms"
import { useMemo } from "react";

function App() {
 return(
  <RecoilRoot>
    <MainApp />
  </RecoilRoot>
 )
}
function MainApp(){
  const netwokNotificationCount=useRecoilValue(networkAtom);  
  const jobAtomCount=useRecoilValue(jobsAtom);
  const notificationAtomCount=useRecoilValue(notificationsAtom);
  const messagingAtomCount=useRecoilValue(messagingAtom);
  const totalNotificationCount=useRecoilValue(totalNotificationSelector) //=>
  // or
  // const totalNotificationCount=useMemo(()=>{
  //   return netwokNotificationCount+jobAtomCount+notificationAtomCount+messagingAtomCount;
  // },[netwokNotificationCount,jobAtomCount,notificationAtomCount,messagingAtomCount])

  return (
    <>
    <button>Home</button>
    <button>My network ({netwokNotificationCount>=100 ? "99+":netwokNotificationCount})</button>
    <button>Jobs ({jobAtomCount})</button>
    <button>Messages ({messagingAtomCount})</button>
    <button>Notifications ({notificationAtomCount})</button>
    <button>Me ({totalNotificationCount}) </button>
    </>
  )
}
// function ButtonUpdater(){
//   const setMessagingAtomCount=useSetRecoilState(messagingAtom);
//   return <div>
//     <button  onClick={()=>{
//     setMessagingAtomCount(c=>c+1)
//   }}>Me</button>    
//   </div>
// }

export default App
