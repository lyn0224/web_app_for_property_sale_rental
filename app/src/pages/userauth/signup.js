import React, { useState, useContext } from 'react';
import { Form } from '../../components/export';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../../context/firebase';
import * as ROUTES from '../../constants/routes'
import Footer from "../../containers/footer"
import UserStore from "../../stores/UserStore"
function Signup() {

    const history = useHistory();
    // const { firebase } = useContext(FirebaseContext);
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const isInvalid = firstName === '' || password === '' || emailAddress === '';
    
    async function handleSignup (event){
        event.preventDefault();
            if(!emailAddress){
                return;
            }
            if(!password){
                return;
            }
            try{
                let res = await fetch('http://localhost:9000/register', {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: firstName,
                        emailAddress : emailAddress,
                        password: password,
                    })
                });
                let result = await res.json();
                console.log(result.success);
                if(result && result.success){
                    UserStore.isLoggedIn = true;
                    UserStore.username = result.username;
                    console.log(result.username);
                    console.log("successful signup");
                }else if(result && result.success === false){
             
                    alert(result.msg);
                }
            }catch(e){
                console.log(e);
      
            }
    }
    
    return (
        <>
           <Form>
                    <Form.Title>Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    
                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input
                            placeholder="First Name"
                            value={firstName}
                            onChange={({ target }) => setFirstName(target.value)}
                        />
                        <Form.Input
                            placeholder="Email Address"
                            value={emailAddress}
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
                            Sign Up
                        </Form.Submit>
                        
                        <Form.Text>
                            Already a user? <Form.Link to={ROUTES.SIGN_IN}>Sign In now.</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA.
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
                <Footer/>
        </>
    )
}

export default Signup