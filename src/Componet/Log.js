import "./Logcss.css";
import React from "react";
import {useState} from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom"


function Log() {
    const navigate = useNavigate();

const [user , setUser] = useState({
    name :"",
    email :"", 
    password :"", 
})

function hangleChange(e){
    const{name,value} = e.target
    setUser({
        ...user,
        [name]:value
    })
}

function login() {
    axios.post("http://localhost:3001/Ecomm/api/login", user)   // http://localhost:3001/Ecomm/api/register
    .then(res => {
        alert(res.data.message)
        
        
    })
}
return (
<div className="login">
{console.log( user)}
    <h1>Login</h1>
    <input type="text" name="email"  value={user.email} onChange={hangleChange} placeholder="Enter your Email"></input>
    <input type="password" name="password" value={user.password} onChange={hangleChange} placeholder="Enter your Password" ></input>
    <div className="button" onClick={login}>Login</div>
    <div>or</div>
    <div className="button" onClick={() => navigate("/register")}>Register</div>

</div>
);
}

export default Log;