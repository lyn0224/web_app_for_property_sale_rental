import React, {useState, createContext,useEffect } from 'react';
    const Context = React.createContext()
    function UserInfor({children}){
        const [username, setUserName] = useState('');
        const [email, setEmail] = useState('');
        const [loggedIn  , setLoggedIn] = useState();
        const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));

    
       function logout(){
        localStorage.removeItem("authUser")
        setUser(null);
       }
        return(
            <Context.Provider value = {{user,setUser,logout}}>
                {children}
            </Context.Provider>
        )
    }

export {UserInfor, Context};