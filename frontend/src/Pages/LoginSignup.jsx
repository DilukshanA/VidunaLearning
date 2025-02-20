import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import programmer from '../Components/Assets/programmer.png';
import logo_black from '../Components/Assets/logo_black.png';


const LoginSignup = () => {

  const [state, setState] = useState("Login");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  // Add API for login and signup

  const login = async ()=>{
    console.log("Login Function Executed",formData);
    let responseData;
    await fetch('https://viduna-learning-backend.vercel.app/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }

  const signup = async ()=>{
    console.log("Signup Function Executed",formData);
    let responseData;
    await fetch('https://viduna-learning-backend.vercel.app/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)

    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else{
      alert(responseData.errors)
    }
  }

  return (
    <div onClick={window.scrollTo(0,0)} className='loginsignup'>
      <div className="loginsignup-container">

        <div className="loginsignup-container-left">
          <img src={programmer} alt=''/>
        </div>

        <div className="loginsignup-container-right">
          <img src={logo_black} alt=''/>
          <h1>{state}</h1>

          <div className="loginsignup-fields">
            {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name'/>:<></>}
            <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address'/>
            <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password'/>
          </div>
          <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
          {state==="Sign Up"
          ?<p className='loginsignup-login'>Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>
          :<p className='loginsignup-login'>Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>}
          
          <div className="loginsignup-agree">
            <input type='checkbox' name='' id=''/>
            <p>By continuing, i agree to the term of  use & privacy policy.</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default LoginSignup