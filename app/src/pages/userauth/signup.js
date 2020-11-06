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
                let res = await fetch('http://localhost:9000/is-email-usable', {
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
               if(result && result.success === false){
             
                    alert(result.msg);
                }
            }catch(e){
                console.log(e);
      
            }

            try{
                let res = await fetch('http://localhost:9000/is-username-usable', {
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
              if(result && result.success === false){
             
                    alert(result.msg);
                }
            }catch(e){
                console.log(e);
      
            }

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
<<<<<<< HEAD

=======
    
    function handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        setRealtor(!realtor);
    }
    const isInvalid = !realtor ? username === '' || password === '' || emailAddress === '' :
    firstName === '' || lastName === '' || zipcode === '' || phone === '' || username === '' || password === '' || emailAddress === '';

    const conditionalRealtor = realtor ? 
    <Form.Base>
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
            placeholder="Zip Code"
            value={zipcode}
            onChange={({ target }) => setZipCode(target.value)}
        />
        <Form.Input
            placeholder="Phone Number"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
        />
    </Form.Base> : null;
>>>>>>> 525d1d217b7838ab9882b2a9f9c596f35258c0b7
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
                    <label>
                        <input
                            name="realtor"
                            type="checkbox"
                            checked={realtor}
                            onChange={handleInputChange} />
                            I am landlord or industry professional
                    </label>
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