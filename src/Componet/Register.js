import "./Registercss.css";
import React from "react";
import { useState } from "react" ;

import axios  from 'axios';
import { useNavigate } from "react-router-dom";





function Register() {
    const navigate = useNavigate();


function handleChange(e)
{
const { name , value } = e.target
console.log(e.target)
setUser({
    ...user, //spread operator
    [name]:value // if i am changing any field  it will get stored into attribute name & ...user will keep all other attributes unchange 
})
}

const [user , setUser] = useState({
    name :"",
    email :"", 
    password :"", 
    reEnterPassword :""
})

function register()
{
const {name,email,password,reEnterPassword} = user
if(name && email && password && (password===reEnterPassword)){
    axios.post("http://localhost:3001/Ecomm/api/register",user)
    .then(res => {alert(res.data.message) 
        })
    .catch(error => {console.error("There was an error!",error)} );
}
else{
    alert("invalid input")
}
}

return (
<div className="Register">
{console.log("User", user)}
    <h1>Register</h1>
    <input type="text" name="name"   value={user.name} placeholder="Enter your Name" onChange={handleChange}></input>
    <input type="text" name="email"  value={user.email} placeholder="Enter your Email" onChange={handleChange} ></input>
    <input type="password" name="password" value={user.password}  placeholder="Enter your Password" onChange={handleChange} ></input>
    <input type="password" name="reEnterPassword" value={user.reEnterpassword}  placeholder="Re-enter your Password" onChange={handleChange} ></input>
    <div className="button" onClick={register} >Register</div>
    
    <div>or</div>
    <div className="button" onClick={() => navigate("/login")}>Login</div>
    
</div>
);
}

export default Register;