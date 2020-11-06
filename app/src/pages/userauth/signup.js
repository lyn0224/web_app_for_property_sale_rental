import React, { useState, useContext } from 'react';
import { Form } from '../../components/export';
import { useHistory,Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes'
import Footer from "../../containers/footer"

function Signup() {

    const history = useHistory();
    // const { firebase } = useContext(FirebaseContext);
    const [username, setUsername] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [realtor, setRealtor] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [zipcode, setZipCode] = useState('');
    const [phone, setPhone] = useState('');
    
    async function handleSignup (event){
        //console.log(username, emailAddress, password, firstName, lastName, zipcode, phone);
        event.preventDefault();
               

            try{
                let res = await fetch('http://localhost:9000/register', {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: username,
                        emailAddress : emailAddress,
                        password: password,
                        firstName: firstName,
                        lastName: lastName,
                        zipcode: zipcode,
                        phone: phone
                    })
                });
                let result = await res.json();
                console.log(result);
                if(result && result.success){
                    history.push(ROUTES.SIGN_IN);
                    console.log(result.username);
                    console.log("successful signup");
                }else if(result && result.success === false){
             
                    alert(result.msg);
                }
            }catch(e){
                console.log(e);
      
            }
    }
    
    function handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setRealtor(!realtor);
    }
    const isInvalid = !realtor ? username === '' || password === '' || emailAddress === '' :
    firstName === '' || lastName === '' || zipcode === '' || phone === '' || username === '' || password === '' || emailAddress === '';

    const conditionalRealtor = realtor ? 
    <>
        <Form.Input
            placeholder="First Name"
            value={firstName}
            onChange={({ target }) => setFirstName(target.value)}
        />
        <Form.Input
            placeholder="Last Name"
            value={lastName}
            onChange={({ target }) => setLastName(target.value)}
        />
        <Form.Input
            placeholder="Zip Code :123456"
            value={zipcode}
            onChange={({ target }) => setZipCode(target.value)}
            pattern="[0-9]{5}"
        />
        <Form.Input
            type="tel"
            placeholder="Phone Number:123-456-7890"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        />
    </> : null;
    return (
        <>
           <Form>
                <Form.Title>Sign Up</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                
                <Form.Base onSubmit={handleSignup} method="POST">
                    <Form.Input
                        placeholder="User Name"
                        value={username}
                        onChange={({ target }) => setUsername(target.value)}
                    />
                    <Form.Input
                        type = "email"
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
                    <Form.Text>
                        <Form.Input
                                name="realtor"
                                type="checkbox"
                                checked={realtor}
                                onChange={handleInputChange} />
                            I am landlord or industry professional
                    </Form.Text>
                    {conditionalRealtor}
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