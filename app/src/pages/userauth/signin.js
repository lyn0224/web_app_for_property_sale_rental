import React, {useState,useContext}from 'react'
import { useHistory, Redirect } from 'react-router-dom';
import { Form } from '../../components/export';
import {Context} from '../../context/userInfo'
import * as ROUTES from '../../constants/routes'
import Footer from "../../containers/footer"
import UserStore from "../../stores/UserStore"

function Signin(){
    const [error, setError] = useState('');
    // const [emailAddress, setEmailAddress] = useState('');
    const [username, setuUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    // const {firebase} = useContext(FirebaseContext)
    const isInvalid = password === '' | password === '';
    const {loggedIn,setUserName,setEmail,setLoggedIn,setUser,user} = useContext(Context)

    async function handleSignin(event){
        event.preventDefault();
        if(!username){
            return;
        }
        if(!password){
            return;
        }
        try{
            let res = await fetch('http://localhost:9000/login', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });
            let result = await res.json();
           
            if(result && result.success){
                if(result && result.token ){
                    localStorage.setItem('authUser', JSON.stringify(result));
                    setUser(JSON.parse(localStorage.getItem('authUser')));
                }
                console.log(result);
                console.log("login success");
            }else if(result && result.success === false){
                alert(result.msg);
            }
        }catch(e){
            console.log(e);
        }
    }
    console.log(JSON.parse(localStorage.getItem('authUser')));
    return (
        <>
               {/* {user !== null}  ? <Redirect to='/'  /> :     */}
               <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    
                    <Form.Base onSubmit={handleSignin} method="POST">
                        <Form.Input
                            placeholder="Username"
                            value={username}
                            onChange={({ target }) => setuUsername(target.value)}
                        />
                        {/* <Form.Input
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        /> */}
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
                            New to our website? <Form.Link to={ROUTES.SIGN_UP}>Sign up now.</Form.Link>
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

export default Signin