import React, {useContext, useState } from 'react';
import SubmitButton from '../components/SubmitButton';
import UserStore from '../stores/UserStore';
import InputFiled from '../components/InputField';
import {Context} from "../context/LoginContext"
import { Form } from '../components/export';


function LoginForm() {
    const [Username_Input, setUsername_Input] = useState('');
    const [Userpass_Input, setUserpass_Input] = useState('');
    const [button_disabled, setButton_disabled] = useState(false);
    const [error, setError] = useState('');

    const isInvalid = Userpass_Input === '' | Username_Input === '';
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
            console.log(result.success);
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
                 {/* <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    
                    <Form.Base onSubmit={doLogin} method="POST">
                        <Form.Input
                            placeholder="Username"
                            value={Username_Input}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            type="password"
                            value={password}
                            autoComplete="off"
                            placeholder="Password"
                            onChange={({ target }) => setPassword(target.value)} 
                        />
                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign In
                        </Form.Submit>
                        
                        <Form.Text>
                            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
                        </Form.Text>    
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA.
                        </Form.TextSmall>
                    </Form.Base>
                </Form> */}

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