import React, {useState, createContext,useEffect } from 'react';
import UserStore from "../stores/UserStore"
    const Context = React.createContext()
    function UserInfor({children}){
        const [username, setUserName] = useState('');
        const [email, setEmail] = useState('');
        const [loggedIn  , setLoggedIn] = useState();
        const [user, setUser] = useState(localStorage.getItem('authUser'));

       useEffect(() => {

            // if(UserStore.loggedIn==true){
            //     const authUser = {
            //         username : username,    
            //         Email : email,
            //     }
            //         localStorage.setItem('authUser', JSON.stringify(authUser));
            //         setUser(authUser);
            //         console.log(JSON.stringify(authUser));
            //         console.log("local storage "+localStorage.getItem('authUser'));
            //         console.log("local storage "+localStorage.getItem('authUser'));

            // }else{
            //         localStorage.removeItem('authUser');
            //         setUser(null);
            //         console.log(user);
            // }
            try{
                fetch('http://localhost:9000/isLoggedIn', {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: username,
                    })
                }).then(res => res.json()).then(result=>{
                    console.log(result);
                    if(result && result.success){
                        const authUser = JSON.stringify(result);
                        localStorage.setItem('authUser', authUser);
                        setUser(authUser);
                        
                    }else if(result && result.success === false){
                        console.log(result.msg);
                        localStorage.removeItem('authUser');
                        setUser(null);
                    }
                })
               
            }catch(e){
                console.log(e);
            }
           
        }, []);
       
        return(
            <Context.Provider value = {{username, setUserName,email,setEmail,loggedIn , setLoggedIn,user}}>
                {children}
            </Context.Provider>
        )
    }

export {UserInfor, Context};