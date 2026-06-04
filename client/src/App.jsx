import React from 'react'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Addjob from './pages/Addjob'
import Viewjob from './pages/Viewjob'
import Editjob from './pages/Editjob'
import {useAuth} from "./context/AuthContext";
import Register from './pages/Register'
import Login from './pages/Login'
import Findjobs from './pages/Findjobs'

function AdminRoute({children}){
  const {user} = useAuth();

  if(!user){
    return <Navigate to="/login" />;
  }
  if(user.role !=="admin"){
    return <Navigate to="/" />;
  }
  return children;
}
const App = () => {

  return <>

  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
  <Route path='/find' element={<Findjobs/>}></Route>
  <Route path='/add' element={
    <AdminRoute>
      <Addjob/>
    </AdminRoute>
  }></Route>
  <Route path='/register' element={<Register />}></Route>
  <Route path='/login' element={<Login />}></Route>
  <Route path='/view/:id' element={<Viewjob/>}></Route>
  <Route path='/edit/:id' element={
    <AdminRoute>
      <Editjob/>
    </AdminRoute>
  }></Route>
  </Routes>
  
  <Footer/>
  </BrowserRouter>
  
  </>
}

export default App