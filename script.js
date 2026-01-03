import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client'
import { useState} from "react";


function Main(){
    const[pass,setpass] = useState("");
    const[length,setlength] = useState(15);
    const[numchange,setchange] = useState(false);
    const[charchange,setcarchange] = useState(false);

    function password(){
  let a = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
  if(numchange)a+= "123456789012345678901234567890";
  if(charchange)a+= "!@#$%^&*";
let ans = "";
for(let i=0;i<length;i++){
  ans+= a[Math.floor(Math.random()*a.length)];
}
setpass(ans);
}
useEffect(()=>{
  password();
},[length,numchange,charchange])

    return (
    <>
        <h1>Password is {pass}</h1>
        <div>
            <input type="range" min={5} max={50} value={length} onChange={(e)=>setlength(e.target.value)}></input>
            <br/>
            <label>Length is {length}</label>
            <input type="checkbox" defaultChecked={numchange} onChange={()=>setchange(!numchange)}></input>
                 <label>Number</label>
                   <input type="checkbox" defaultChecked={charchange} onChange={()=>setcarchange(!charchange)}></input>
                 <label>special_char</label>
        </div>
    </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<Main/>);
