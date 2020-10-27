import React, {useContext, useState } from 'react';
import SubmitButton from '../components/SubmitButton';
import UserStore from '../stores/UserStore';
import InputFiled from '../components/InputField';
import {Context} from "../context/LoginContext"



function LoginForm() {

    const {username,changeUser,setButtonDisabled,changePass,buttonDisabled} = useContext(Context)
    const [Username_Input, setUsername_Input] = useState('');
    const [Userpass_Input, setUserpass_Input] = useState('');

     function doLogin(){
         changePass(Userpass_Input);
         changeUser(Username_Input);
         setButtonDisabled();
         console.log(buttonDisabled);
        if(Username_Input==="1" && Userpass_Input==="1"){
            // console.log("here")
            UserStore.isLoggedIn = true;
            UserStore.username = username;
        }
        else{
            console.log("no user found")
        }
    }
        return (
            <div className="loginForm">
                <InputFiled
                    type='text'
                    placeholder='Username'
                    value={Username_Input}
                    onChange={ (val) => setUsername_Input(val) }
                />
                <InputFiled
                    type='password'
                    placeholder='Password'
                    value={Userpass_Input}
                    onChange={ (val) => setUserpass_Input(val) }
                />
                <SubmitButton
                    text='Login'
                    disabled={buttonDisabled}
                    onClick={() => doLogin()}
                />
            </div>
        )
    
}
export default LoginForm;