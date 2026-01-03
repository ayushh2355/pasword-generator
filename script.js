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
    <div id="box">
      <h1>Password Generator</h1>

      <div className="password">
        {pass}
      </div>

      <div className="control">
        <label>Length: {length}</label>
        <input
          type="range"
          min={5}
          max={50}
          value={length}
          onChange={(e) => setlength(e.target.value)}
        />
      </div>

      <div className="checkboxes">
        <label>
          <input
            type="checkbox"
            checked={numchange}
            onChange={() => setchange(!numchange)}
          />
          Include Numbers
        </label>

        <label>
          <input
            type="checkbox"
            checked={charchange}
            onChange={() => setcarchange(!charchange)}
          />
          Include Special Characters
        </label>
      </div>
    </div>
  </>
);
}
ReactDOM.createRoot(document.getElementById('root')).render(<Main/>);
