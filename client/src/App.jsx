import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Addjob from './pages/Addjob'
import Viewjob from './pages/Viewjob'
import Findjobs from './pages/Findjobs'
import Editjob from './pages/Editjob'
import Login from './pages/Login'
import Register from './pages/Register'
const App = () => {
  return <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element = {<Home/>}></Route>
    <Route path='/find_jobs' element = {<Findjobs/>}></Route>
    <Route path='/add' element = {<Addjob/>}></Route>
    <Route path='/view/:id' element = {<Viewjob/>}></Route>
    <Route path='/edit/:id' element = {<Editjob/>}></Route>
    <Route path="/signup" element={<Register/>} />
    <Route path="/login" element={<Login />} />
  </Routes>
  <Footer/>
  </BrowserRouter>
  </>
}

export default App
