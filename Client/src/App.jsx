import { Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/home/Home'
import Dashboard from './pages/dashboard/Dashboard'
import About from './pages/about/About'
import SignUp from './pages/Auth/SignUp'
import Login from './pages/Auth/Login'
function App() {

  return (
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
  )
}

export default App
