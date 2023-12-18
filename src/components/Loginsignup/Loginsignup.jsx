import React, { useState } from 'react'
import './Loginsignup.css'

import user_icon from '../Assets/person.jfif'
import email_icon from '../Assets/email.jfif'
import password_icon from '../Assets/password.jfif'

const Loginsignup = () => {

  const [action,setAction] = useState("Sign Up");
  return (
    <div className="container">
       <div className='header'>
        <div className='text'>{action}</div>
        <div className='underline'></div>
       </div>

       <div className='inputs'>
        {action==="Login"?<div></div>:<div className='input'>

          <img src={user_icon} alt=''/>
          <input placeholder='Name' type='text'/>

        </div>}
        
        <div className='input'>
          <img src={email_icon} alt=''/>
          <input placeholder='email id' type='email'/>
        </div>

        <div className='input'>
          <img src={password_icon} alt=''/>
          <input placeholder='password' type='password'/>
        </div>
       </div>
       {action==="Sign Up"?<div></div>:<div className='forget-password'>Lost Password?<span>Click here</span></div>}
       
       <div className='submit-container'>
        <div className={action==="Login"?"submit gray":"submit"} onClick={ () => setAction("Log In")}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={ () => setAction("Sign Up")}>Log In</div>
       </div>

    </div>
   
  );
}

export default Loginsignup

