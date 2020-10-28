import React, {useState, createContext } from 'react';

    const Context = React.createContext()
    function UserInfor({children}){
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [photoUrl , setPhotoUrl] = useState('');
        const [emailVerified , setEmailVerified] = useState(false);
        const [uid  , setUid] = useState('');
        const [loggedIn  , setLoggedIn] = useState(false);

        console.log('this is userinfo')
        console.log(loggedIn)
        return(
            <Context.Provider value = {{name, setName,email,setEmail,photoUrl,setPhotoUrl,emailVerified,setEmailVerified,uid,setUid,loggedIn  , setLoggedIn}}>
                {children}
            </Context.Provider>
        )
    }

export {UserInfor, Context};