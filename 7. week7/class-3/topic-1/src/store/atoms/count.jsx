import {atom, selector} from "recoil"
export const countAtom=atom({
    key:"countAtom",
    default:0,
});

export const evenValueSelector=selector({
    key:"eveneValueSelector",
    get:({get})=>{
        const count=get(countAtom);
        return count%2===0 ? `Even value ${count}` : null ;
    }
})
export const evenSelector=selector({
    key:"evenSelector",
    get:(props)=>{
        const count=props.get(countAtom);
        return count%2==0;
    }
})

// const textState=atom({
//     key:"textState",
//     default:'',
// })
// const charCountState=selector({
//     key:"charCountState",
//     get:({get})=>{
//         const text=get(textState);
//         return text.length;
//     }
// })
