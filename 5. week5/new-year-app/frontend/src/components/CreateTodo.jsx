import { useState } from "react";



export function CreateTodo(props){

    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    return <div>
        <input style={{
            padding:10 , margin:10
        }} type="text" placeholder="title" onChange={function(){
            const value=e.target.value;
            setTitle(e.target.value)
        }}/> <br />
        <input style={{
            padding:10,margin:10 
        }} type="text" placeholder="description"  onChange={function(){
            const value=e.target.value;
            setTitle(e.target.value)
        }}/> <br />
        <button  style={{
            padding:10,margin:10 
        }} onClick={()=>{
            fetch("http://localhost:3000/",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "Content-type":"Application/json"
                }
            })
            .then(async function(res){
                const json=await res.json();
                alert("Todo added")
            })
        }} >Add a todo </button>
    </div>
}