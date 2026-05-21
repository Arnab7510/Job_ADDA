import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from"./components/Navbar";
import Home from "./components/Home";
import Jobs from"./components/Jobs";
import About from"./components/About";
import Contact from"./components/Contact";
import Footer from "./components/Footer"
import Login from "./components/Login";
import Signup from "./components/Signup";
import Chatbot from "./components/Chatbot";

function App(){
  return <>
   <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Jobs" element={<Jobs />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
   
    <Chatbot />
  
  </> 
}
export default App;