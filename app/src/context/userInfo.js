import React, {useState } from 'react';
import { useHistory } from 'react-router-dom';
import *as ROUTES from '../constants/routes'
    const Context = React.createContext()
    function UserInfor({children}){

        const history = useHistory()
        const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
    
       function logout(){
        localStorage.removeItem("authUser")
        setUser(null);
        history.push(ROUTES.HOME);
       }
        return(
            <Context.Provider value = {{user,setUser,logout}}>
                {children}
            </Context.Provider>
        )
    }

export {UserInfor, Context};