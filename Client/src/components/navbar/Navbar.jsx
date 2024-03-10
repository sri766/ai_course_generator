import React from 'react'
import './Navbar.scss'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate();

  return (

      <ul className='container_nav'>
        <li className='nav_item_logo' onClick={()=>navigate('/Home')}>Learn Dev</li>
        <li className='menu_item' onClick={()=>navigate('/Dashboard')}>Dashboard</li>
        <li className='menu_item' onClick={()=>navigate('/Courses')}>Courses</li>
        <li className='menu_item' onClick={()=>navigate('/About')}>About</li>
        <li className='menu_item' onClick={()=>navigate('/Setting')}>Setting</li>
        <button className='nav_btn' onClick={()=>navigate('SignUp')}>Sign Up</button>
      </ul>
  )
}

export default Navbar
