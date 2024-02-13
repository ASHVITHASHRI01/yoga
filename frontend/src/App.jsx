//import React from 'react'
import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Admin from './Components/Admin'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Home from './Components/Home'
import Contact from './Components/Contact';
import About from './Components/About';
import Workshop from './Components/Workshop';
import Enroll from './Components/Enroll';
import Price from './Components/Price';
import Ladmin from './Components/Ladmin';
import Dash from './Components/Dash'
import Addwork from './Components/Addwork'
import People from './Components/People'
import Academy from './Components/Academy'
import Courses from './Components/Courses'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Admin/>} />
      <Route path="/ladmin" element={<Ladmin/>} />
      <Route path="/dash" element={<Dash/>} />
      <Route path="/add" element={<Addwork/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/work" element={<Workshop/>} />
        <Route path="/reg" element={<Enroll/>} />
        <Route path="/price" element={<Price/>} />
        <Route path="/people" element={<People/>} />
        <Route path="/academy" element={<Academy/>} />
        <Route path="/courses" element={<Courses/>} />

      </Routes>   
     </BrowserRouter>
  )
}

export default App;

