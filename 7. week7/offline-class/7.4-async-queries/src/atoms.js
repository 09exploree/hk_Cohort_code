import axios from "axios";
import {atom, selector} from "recoil"

// Normal code =>
// export const notifications=atom({
//     key:"networkAtom",
//     default:{
//         network:0,
//         jobs:0,
//         messaging:0,
//         notifications:0,
//     }
// })

// export const notifications=atom({      // this is not possible bcz default value for an atom need to be sychronus or ot can not bt a function 
//     key:"networkAtom",
//     default: async()=>{
//         const res=await axios.get("http://localhost:3000/")
//         return res.data;
//     }
// })

// Asychronus Data queries

export const notifications=atom({     // To overcome the above problem we selector can be asynchronus so we use selctors to fetch the request
    key:"networkAtom",
    default:selector({                 // this is how we can give async value to a atom
        key:"networkAtomSelector",
        get:async ()=>{
            // await new Promise( r =>setTimeout(r,5000))
            const res=await axios.get("http://localhost:3000/") 
            return res.data;
        }
    })  
})

export const totalNotificationSelector=selector({
  key:"totalNotificationSelector" ,
  get:({get})=>{
    const allNotifications=get(notifications);
    return allNotifications.network+allNotifications.jobs+allNotifications.messaging+allNotifications.notifications;
  }
})