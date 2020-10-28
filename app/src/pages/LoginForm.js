import React, {useContext, useState } from 'react';
import SubmitButton from '../components/SubmitButton';
import UserStore from '../stores/UserStore';
import InputFiled from '../components/InputField';
import {Context} from "../context/LoginContext"



function LoginForm() {
    const [Username_Input, setUsername_Input] = useState('');
    const [Userpass_Input, setUserpass_Input] = useState('');
    const [button_disabled, setButton_disabled] = useState(false);
    //  function doLogin(){
    //      changePass(Userpass_Input);
    //      changeUser(Username_Input);
    //      setButtonDisabled();
    //      console.log(buttonDisabled);
    //     if(Username_Input==="1" && Userpass_Input==="1"){
    //         // console.log("here")
    //         UserStore.isLoggedIn = true;
    //         UserStore.username = username;
    //     }
    //     else{
    //         console.log("no user found")
    //     }
    // }
    function resetForm(){
        setUsername_Input('')
        setUserpass_Input('')
        setButton_disabled(false)

    }
    async function doLogin(){
        if(!Username_Input){
            return;
        }
        if(!Userpass_Input){
            return;
        }
        setButton_disabled(true)
        try{
            let res = await fetch('/login', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: Username_Input,
                    password: Userpass_Input
                })
            });
            let result = await res.json();
            if(result && result.success){
                UserStore.isLoggedIn = true;
                UserStore.username = result.username;
            }else if(result && result.success === false){
                resetForm();
                alert(result.msg);
            }
        }catch(e){
            console.log(e);
            resetForm();
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
                    disabled={button_disabled}
                    onClick={() => doLogin()}
                />
            </div>
        )
    
}
export default LoginForm;