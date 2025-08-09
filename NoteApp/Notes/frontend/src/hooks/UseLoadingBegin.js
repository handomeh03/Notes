import { useEffect, useState } from "react";

export function UseBegin(){
    let [flag,setFlag]=useState(true);
      useEffect(()=>{
             
              setTimeout(()=>{
                setFlag(false)
              },1500);
             
            
      },[])
      return {flag}
}