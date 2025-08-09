import { useState } from "react";
import { useSaveUser } from "../Context/userContext";
import { useNavigate } from "react-router-dom";

export function UseUser(){
    let [error,setError]=useState(null);
    let {dispatch}=useSaveUser();
    let navigate=useNavigate();
     async function login(email,password){
            try {
              const res =await fetch("http://localhost:8080/api/user/login",{
                method:"POST",
                headers:{
                  "content-Type":"application/json"  
                },
                body:JSON.stringify({email,password})
              })
              const data=await res.json();
              if(!res.ok){
                dispatch({type:"dialog",payload:true})
                 setError(data.error);
              }
              if(res.ok){
                
                 dispatch({type:"login",payload:data});
                 localStorage.setItem("user",JSON.stringify(data));
                 navigate("/");

              }
               
            } catch (error) {
              console.log(error);
            }
       }
       return {login,error}
}