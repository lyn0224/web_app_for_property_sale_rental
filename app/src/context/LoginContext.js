import React, { useState} from 'react';
import UserStore from '../stores/UserStore';


const Context = React.createContext()
function LoginContextProvider({children}){
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [buttonDisabled,setButtonDisabled] = useState(false);

    function changeUser(object){
        object = object.trim();
        console.log(object);
        if(object.length > 12){
            return;
        }
        setUsername(object)
    }

    function changePass(object){
      object = object.trim();
        console.log(object);
        if(object.length > 12){
            return;
        }
        setPassword(object)
    }
    function toggleButton(){
      const update = {buttonDisabled :!buttonDisabled}
      setButtonDisabled(update)
    }
    async function doLogout(){
        try{
            let res = await fetch('/logout', {
              method: 'post',
              header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            });
            let result = await res.json();
            if(result && result.success){
              UserStore.isLoggedIn = false;
              UserStore.username = '';
            }
          }catch(e){
            console.log(e);
          }
    }

    function resetForm(){
        this.setState({
            username: '',
            password: '',
            buttonDisabled: false
        })
    }
    return (
        <Context.Provider value = {{username,password,setButtonDisabled, doLogout,changeUser,changePass, resetForm,toggleButton,buttonDisabled}}>
            {children}
        </Context.Provider>
    )
}

export {LoginContextProvider, Context}