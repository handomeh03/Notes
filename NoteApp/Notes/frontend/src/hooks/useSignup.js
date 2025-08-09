import { useState } from "react";
import { useSaveUser } from "../Context/userContext";
import { useNavigate } from "react-router-dom";

export function useSignup(){
    let [error,setError]=useState("");
     let {dispatch}=useSaveUser();
     let navigate=useNavigate();
    async function signup(name,email,password) {
        try {
            const res=await fetch("http://localhost:8080/api/user/signup",{
                method:"POST",
                headers:{
                  "content-Type":"application/json"  
                },
                body:JSON.stringify({name,email,password})
            })
            const data= await res.json();
            if(!res.ok){
             dispatch({type:"dialog",payload:true})
             setError(data.error)

            }
            if(res.ok){
                
                 dispatch({type:"signup",payload:data});
                 localStorage.setItem("user",JSON.stringify(data))
                 
                 navigate("/");
            }
            
        } catch (error) {
            console.log(error)
        }
        
    }
    return {signup,error}
}