import { Component } from "react";
import React, {useState} from "react";


export default function Person(){ 
           const[fullName, setfullName] = useState("abdilrahman tarek") ;
           const[bio, setio] = useState("bio") ;
           const[imgSrc, setimgsrc] = useState("logo192.png") ;
           const[proffission, setproffission] = useState("programming") ;
           const[show, setshow] = useState(false) ;
    
    
 const change = () => {
                
               setshow(!show)
         }
return (
    <>
           
           {show&& 
           <div>
           <h3>{bio}</h3>
           <h3>{fullName}</h3>
           <h3>{imgSrc}</h3>
           <h3>{proffission}</h3>
           </div>
           }
           
        <div>
            <button onClick={change}> toggle </button>
        </div>
        </>
)
   
           
       
}