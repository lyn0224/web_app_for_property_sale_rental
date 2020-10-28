import React, { useState, useContext } from 'react';
import { Form } from '../../components/export';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../../context/firebase';

function Signup() {

    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [firstName, setFirstName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const isInvalid = firstName === '' || password === '' || emailAddress === '';
    
    const handleSignup = (event) => {
        event.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then((result) =>
                result.user
                .updateProfile({
                    displayName: firstName,
                })
                .then(() => {
                    setEmailAddress('');
                    setPassword('');
                    setError('');
                    history.push('/');
                })
            ).catch((error) => setError(error.message));

    }

    const handleSignout =(event)=> {
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });
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
                            Already a user? <Form.Link to="/login">Sign In now.</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA.
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
        </>
    )
}

export default Signup