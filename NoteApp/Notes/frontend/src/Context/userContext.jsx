import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";

const UserContext=createContext();

function userReduser(state,action){
    switch(action.type){
        case "login":
            return {...state,user:action.payload};

         case "signup":
            return {...state,user:action.payload}   

         case "logout":
           
            return {...state,user:null}   
          case "dialog":
            return {...state,open:action.payload}  
        default :
        return state;    
    }
}

export default function UserProvider({children}){
    let [state,dispatch]=useReducer(userReduser,{user:JSON.parse(localStorage.getItem("user")),open:false});
    return(
        <UserContext.Provider value={{...state,dispatch}}>
            {children}
        </UserContext.Provider>
    );
}

export function useSaveUser(){
    let context =useContext(UserContext);
    if(!context){
        throw new Error("error");
    }
    return context;
}