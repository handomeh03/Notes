import style from "../CSS/Login.module.css";
import Loading from "../Componnet/Loading";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';

import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import { useLoading } from "../hooks/UseLoading";
import { useState } from "react";
import { UseUser } from "../hooks/useUser";
import { Link } from "react-router-dom";
import Dialogs from "../Componnet/dialog";
export default function Login(){
   let {loading}=useLoading();    
   let [email,setEmail]=useState("");
   let [password,setPassword]=useState("");  
   let {login,error}=UseUser();



    function handleLogin(e) {
         e.preventDefault(); 
           login(email, password);
            
           setEmail("");
           setPassword("");
         }
   
         if(loading){
             return (
                 <Loading/>
             );
         }

    return(
       <div>
        <h1 >Notes</h1>
         <div className={style.Login}>
          <form  >
            <img width={"100px"} src="https://th.bing.com/th/id/R.7b807a879a653ee67f7fe3704e99a1d4?rik=nDT1uDH8DEXIqw&riu=http%3a%2f%2fstatic1.squarespace.com%2fstatic%2f55cb88c7e4b06fab5e0fa35e%2ft%2f5604c20fe4b07f7a3e2b64a3%2f1443152400605%2fAQ_horizontal%2btransparent%2bsingle.png%3fformat%3d1500w&ehk=sKeZ1litEX%2bZxqQVCjccUokIfUSr5yPRF9K8UxAwtc0%3d&risl=&pid=ImgRaw&r=0"></img>
            
          <TextField
            
             value={email}
             onChange={(e)=>{setEmail(e.target.value)}}
            id="email"
  label="Email"
  variant="standard"
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <AccountCircle sx={{ color: '#0d47a1' }} /> 
      </InputAdornment>
    ),
    sx: {
      color: '#0d47a1', 
    },
  }}
  InputLabelProps={{
    sx: {
      color: '#0d47a1', 
    },
  }}
  sx={{
    '& .MuiInput-underline:before': {
      borderBottomColor: '#0d47a1', 
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#0d47a1', 
    },
    '& input': {
      color: 'black',
    },
            }}
           />

            <TextField
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            id="password"
            type="password"
  label="password"
  variant="standard"
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <LockIcon sx={{ color: '#0d47a1' }} /> 
        
      </InputAdornment>
    ),
    sx: {
      color: '#0d47a1', 
    },
  }}
  InputLabelProps={{
    sx: {
      color: '#0d47a1', 
    },
  }}
  sx={{
    '& .MuiInput-underline:before': {
      borderBottomColor: '#0d47a1', 
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#0d47a1', 
    },
    '& input': {
      color: 'black',
    },
            }}
           />
           <Button onClick={handleLogin} variant="contained" endIcon={<LoginIcon />}>
                    login
          </Button>
         
         <p>dont have an account ? <Link to={"/signup"} style={{color:"#0d47a1",textDecoration:"none"}}>Sign up</Link></p>
         
          
         
            

        </form>
        

        </div>
        <Dialogs title={error}/>
       </div>
    );
}