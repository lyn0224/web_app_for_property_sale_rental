import React, {useState,useContext}from 'react'
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../../context/firebase';
import { Form } from '../../components/export';
import {Context} from '../../context/userInfo'
import * as ROUTES from '../../constants/routes'

function Signin(){
    const [error, setError] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const {firebase} = useContext(FirebaseContext)
    const isInvalid = password === '' | emailAddress === '';
    var currentUser ;
    const {loggedIn,setName,setEmail,setPhotoUrl,setEmailVerified,setUid,setLoggedIn} = useContext(Context)
    const handleSignin = (event) => {
        event.preventDefault();
        
        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                setEmailAddress('');
                setPassword('');
                setError('');
                history.push('/');
            })
            .catch((error) => setError(error.message));
        currentUser = firebase.auth().currentUser;
        firebase.auth().onAuthStateChanged(function(currentUser) { //check if the user is logged in
            if (currentUser) {
                setName(currentUser.displayName)
                setEmail(currentUser.email)
                setPhotoUrl(currentUser.photoURL)
                setEmailVerified(currentUser.emailVerified)
                setUid(currentUser.uid)
                setLoggedIn(true)
                console.log("currently is loggedin")
            } else {
                setName('')
                setEmail('')
                setPhotoUrl('')
                setEmailVerified(false)
                setUid('')
                setLoggedIn(false);
            }
            });
    }

    return (
        <>
               {/* {loggedIn}  ? <Redirect to='/'  /> :     */}
               <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    
                    <Form.Base onSubmit={handleSignin} method="POST">
                        <Form.Input
                            placeholder="Email address"
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

        </>
    )
}

export default Signin