import React,{createContext,useContext,useState} from 'react'

const Authcontext=createContext();

const Authprovider = () => {
    const [user,setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const [token,setToken] = useState(localStorage.getItem("token") || "");

    const login = (userdata,tokendata)=>{
        localStorage.setItem("user",JSON.stringify(userdata));
        localStorage.setItem("token",tokendata);

        setUser(userdata);
        setToken(tokendata);
    }

    const logout = ()=>{
        localStorage.removeItem("user");
        localStorage.removeItem("token");

        setUser(null);
        setToken("");
    }
  return <>
  <Authcontext.Provider value={{user,token,login,logout}}>
    {children}
  </Authcontext.Provider>
  
  </>
}

export default Authprovider 
