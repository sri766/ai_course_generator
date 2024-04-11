import React from 'react'
import './SignUp.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(username
      , email
      , password)



  }

  return (
    <div className='auth_signup'> 
      <div className='signup_image' />
      <div className="sign_form">
        <h1>Sign Up</h1>
        <form className='form_component' action="/user" method="post">
          <label className='form_label'>Username</label>
          <input className='form_input' type='text' placeholder='Enter your Name' />
          <label className='form_label'>Email</label>
          <input className='form_input' type='email' placeholder='Enter Your Email' />
          <label className='form_label'>Phone No</label>
          <input className='form_input' type='text' placeholder='Enter your PhoneNo.'></input>
          <label className='form_label'>Password</label>
          <input className='form_input' type='password' placeholder='Enter your Password' />
          <button className='form_btn'>Sign Up</button>
        </form>
          <div className='login_user'>
            <p onClick={()=>navigate('/Login')}>Do you already have an account?</p>
          </div>
      </div>
    </div>
  )
}

export default SignUp

