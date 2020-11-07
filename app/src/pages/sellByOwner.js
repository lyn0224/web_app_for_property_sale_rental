import { Form } from '../components/export';
import React, { useState, useContext } from 'react';

function SellByOwner() {
    const [sellID, setSellID] = useState('');
    const [ownerID, setOwnerID] = useState('');
    const [realtorID, setRealtorID] = useState('');
    const [error, setError] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [aptNum, setAptNum] = useState('');
    const [city, setCity] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [bed, setBed] = useState('');
    const [bath, setBath] = useState('');
    const [area, setArea] = useState('');
    const [pictures, setPictures] = useState([]);
    const [status, setStatus] = useState('');
    
    async function handleListing (event){
        event.preventDefault();
        try{
            let res = await fetch('http://localhost:9000/listing', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    propertyType: propertyType,
                    streetAddress : streetAddress,
                    aptNum: aptNum,
                    city: city,
                    zipCode: zipCode,
                    bed: bed,
                    bath: bath,
                    area: area
                })
            });
            let result = await res.json();
            console.log(result);
            if(result && result.success){
                console.log("successful post");
            }else if(result && result.success === false){
                alert(result.msg);
            }
        }catch(e){
            console.log(e);
    
        }
    }
    
    // function handleInputChange(event) {
    //     const target = event.target;
    //     const value = target.type === 'checkbox' ? target.checked : target.value;
    //     setRealtor(!realtor);
    // }
    const isInvalid = propertyType === '' || streetAddress === '' || aptNum === '' || city === '' || zipCode === '' || bed === '' || bath === '' || area === '';

    // const conditionalRealtor = realtor ? 
    // <>
    //     <Form.Input
    //         placeholder="First Name"
    //         value={firstName}
    //         onChange={({ target }) => setFirstName(target.value)}
    //     />
    // </> : null;

    return (
        <>
           <Form style={{backgroundColor: "blue"}}>
                <Form.Title>Post a For Sale by Owner Listing</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                
                <Form.Base onSubmit={handleListing} method="POST">
                    <Form.Input
                        placeholder="Propert yType"
                        value={propertyType}
                        onChange={({ target }) => setPropertyType(target.value)}
                    />
                    <Form.Input
                        placeholder="Street Address"
                        value={streetAddress}
                        onChange={({ target }) => setStreetAddress(target.value)}
                    />
                    <Form.Input
                        placeholder="Apt#"
                        value={aptNum}
                        onChange={({ target }) => setAptNum(target.value)}
                    />
                    <Form.Input
                        placeholder="City"
                        value={city}
                        onChange={({ target }) => setCity(target.value)}
                    />
                    <Form.Input
                        placeholder="Zip Code #"
                        value={zipCode}
                        onChange={({ target }) => setZipCode(target.value)}
                    />
                    <Form.Input
                        placeholder="Bedroom #"
                        value={bed}
                        onChange={({ target }) => setBed(target.value)}
                    />
                    <Form.Input
                        placeholder="Bathroom #"
                        value={bath}
                        onChange={({ target }) => setBath(target.value)}
                    />
                    <Form.Input
                        placeholder="Area #"
                        value={area}
                        onChange={({ target }) => setArea(target.value)}
                    />
                    <Form.Submit disabled={isInvalid} type="submit">
                        Continue
                    </Form.Submit>
                </Form.Base>
            </Form>
        </>
    )
}

export default SellByOwner

