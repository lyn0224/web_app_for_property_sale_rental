import React, {useState, createContext } from 'react';

    const Context = React.createContext()
    function UserInfor({children}){
        const [username, setUserName] = useState('');
        const [email, setEmail] = useState('');
        const [loggedIn  , setLoggedIn] = useState(false);
        // const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));

        // useEffect(() => {
        //     const listener = firebase.auth().onAuthStateChanged((authUser) => {
        //         if (authUser) {
        //             localStorage.setItem('authUser', JSON.stringify(authUser));
        //             setUser(authUser);
        //         } else {
        //             localStorage.removeItem('authUser');
        //             setUser(null);
        //         }
        //     });
            
        //     return () => listener();
        // }, [loggedIn]);

        console.log('this is userinfo')
        console.log(loggedIn)
        return(
            <Context.Provider value = {{username, setUserName,email,setEmail,loggedIn  , setLoggedIn}}>
                {children}
            </Context.Provider>
        )
    }

export {UserInfor, Context};