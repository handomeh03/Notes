import { useState } from "react";
import style from "../CSS/signup.module.css";

import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import TextFieldsIcon from '@mui/icons-material/TextFields';

import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";
import { useLoading } from "../hooks/UseLoading";
import Loading from "../Componnet/Loading";
import Dialogs from "../Componnet/dialog";
export default function Signup(){
    let {loading}=useLoading();    
    let [name,setname]=useState("");
    let[email,setEmail]=useState("");
    let [password,setPassword]=useState("");
    let {signup,error}=useSignup();

    function handlesignup(e) {
         e.preventDefault(); 
           signup(name,email, password);
           setname("");
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
        <h1>Notes</h1>
          <div className={style.signup}>
             <form  >
                        <img width={"100px"} src="https://th.bing.com/th/id/R.7b807a879a653ee67f7fe3704e99a1d4?rik=nDT1uDH8DEXIqw&riu=http%3a%2f%2fstatic1.squarespace.com%2fstatic%2f55cb88c7e4b06fab5e0fa35e%2ft%2f5604c20fe4b07f7a3e2b64a3%2f1443152400605%2fAQ_horizontal%2btransparent%2bsingle.png%3fformat%3d1500w&ehk=sKeZ1litEX%2bZxqQVCjccUokIfUSr5yPRF9K8UxAwtc0%3d&risl=&pid=ImgRaw&r=0"></img>


                      <TextField
                        
                         value={name}
                         onChange={(e)=>{setname(e.target.value)}}
                        id="name"
              label="Full Name"
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TextFieldsIcon sx={{ color: '#0d47a1' }} /> 
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
                       <Button onClick={handlesignup}  variant="contained" endIcon={<LoginIcon />}>
                                signup
                      </Button> 

                        <p>already have an account ? <Link to={"/login"} style={{color:"#0d47a1",textDecoration:"none"}}>log in</Link></p>  
                    </form>
                    
                    
                    
        </div>
        <Dialogs title={error}/>
      </div>
    );
}