import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Addjob from './pages/Addjob'
import Viewjob from './pages/Viewjob'
import Editjob from './pages/Editjob'
const App = () => {
  return <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element = {<Home/>}></Route>
    <Route path='/add' element = {<Addjob/>}></Route>
    <Route path='/view/:id' element = {<Viewjob/>}></Route>
    <Route path='/edit/:id' element = {<Editjob/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
  </>
}

export default App
