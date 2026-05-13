import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from"./components/Navbar";
import Home from "./components/Home";
import Jobs from"./components/Jobs";
import About from"./components/About";
import Contact from"./components/Contact";
import Footer from "./components/Footer"
function App(){
  return <>
   <Navbar/>
   <Home/>
    <Jobs/>
    <About/>
    <Contact/>
    <Footer/>
  </> 
}
export default App;