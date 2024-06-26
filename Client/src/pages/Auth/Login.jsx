import React from 'react'
import './SignUp.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(username
      , email
      , password)
  }

  return (
    <div className='auth_signup' action="/user/login" method="post"> 
      <div className='signup_image' />
      <div className="sign_form">
        <h1>Login</h1>
        <form className='form_component'>
          <label className='form_label'>Username</label>
          <input className='form_input' type='text' placeholder='Enter your Name' />
          <label className='form_label'>Password</label>
          <input className='form_input' type='password' placeholder='Enter your Password' />
          <button className='form_btn'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login

