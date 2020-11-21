import { Form } from '../components/export';
import React, { useState, useContext } from 'react';
import {Row} from "react-bootstrap"
import ItemAdd from "../components/itemAdd"
import axios from 'axios';

function SellByOwner() {
    const [sellID, setSellID] = useState('');
    const [ownerID, setOwnerID] = useState('');
    const [realtorID, setRealtorID] = useState('');
    const [error, setError] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [aptNum, setAptNum] = useState('');
    const [city, setCity] = useState('');
    const [states, setStates] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [bed, setBed] = useState('');
    const [bath, setBath] = useState('');
    const [area, setArea] = useState('');
    const [living, setLiving] = useState('');
    const [floor, setFloor] = useState('');
    const [parking, setParking] = useState('');
    const [price, setPrice] = useState('');
    const [year, setYear] = useState('');
    const [pictures, setPictures] = useState([]);
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('');
    const [uploadedPicture, setUploadedPicture] = useState([]);

    const handleListing = async(newItem) => {
        const formData = new FormData();
        formData.append('main', newItem.image[0]);
        formData.append('others', newItem.image);
        formData.append('owner', 2);
        formData.append('realtor', 1);
        formData.append('p_type', propertyType);
        formData.append('apt_num', aptNum);
        formData.append('street', streetAddress);
        formData.append('city', city);
        formData.append('state', states);
        formData.append('zip', zipCode);
        formData.append('price',price);
        formData.append('bedroom', bed);
        formData.append('bathroom', bath);
        formData.append('livingroom', living);
        formData.append('flooring', floor);
        formData.append('parking', parking);
        formData.append('area', area);
        formData.append('year', year);
        formData.append('description', description);
        formData.append('status', 'A');
        // console.log(formData);
        // console.log("main", formData.get('main'));
        // console.log("others", formData.get('others'));
        axios
          .post(
            'http://localhost:9000/upload',
            formData
          )
          .then(response => {
            console.log(response);
            setUploadedPicture(response.data);
          })
          .catch(error => console.log('error ' + error));
    }

    // async function handleListing (event){
    //     event.preventDefault();
    //     try{
    //         let res = await fetch('http://localhost:9000/upload', {
    //             method: 'post',
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 propertyType: propertyType,
    //                 streetAddress : streetAddress,
    //                 aptNum: aptNum,
    //                 city: city,
    //                 zipCode: zipCode,
    //                 states: states,
    //                 bed: bed,
    //                 bath: bath,
    //                 area: area,
    //                 living: living,
    //                 floor: floor,
    //                 parking: parking,
    //                 year: year,
    //                 price: price,
    //                 pictures: pictures,
    //                 description: description,
    //                 uploadedPicture: uploadedPicture
    //             })
    //         });
    //         let result = await res.json();
    //         console.log(result);
    //         if(result && result.success){
    //             console.log("successful post");
    //         }else if(result && result.success === false){
    //             alert(result.msg);
    //         }
    //     }catch(e){
    //         console.log(e);
    
    //     }
    // }
    const isInvalid = propertyType === '' || streetAddress === '' || aptNum === '' || city === '' || zipCode === '' || bed === '' || bath === '' || area === '';

    return (
        <>
           <Form style={{backgroundColor: "grey"}}>
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
                    <Row style={{margin: "auto"}}>
                        <Form.Input
                            placeholder="Apt #"
                            value={aptNum}
                            onChange={({ target }) => setAptNum(target.value)}
                            style={{width: "150px", marginRight: "5px"}}
                        />
                        <Form.Input
                            placeholder="City"
                            value={city}
                            onChange={({ target }) => setCity(target.value)}
                            style={{width: "150px", marginLeft: "5px"}}
                        />
                    </Row>
                    <Row style={{margin: "auto"}}>
                        <Form.Input
                            placeholder="Zip #"
                            value={zipCode}
                            onChange={({ target }) => setZipCode(target.value)}
                            style={{width: "150px", marginRight: "5px"}}
                        />
                        <Form.Input
                            placeholder="State"
                            value={states}
                            onChange={({ target }) => setStates(target.value)}
                            style={{width: "150px", marginLeft: "5px"}}
                        />
                    </Row>
                    <Row style={{margin: "auto"}}>
                        <Form.Input
                            placeholder="Bedroom #"
                            value={bed}
                            onChange={({ target }) => setBed(target.value)}
                            style={{width: "100px", marginRight: "2.5px"}}
                        />
                        <Form.Input
                            placeholder="Bathroom #"
                            value={bath}
                            onChange={({ target }) => setBath(target.value)}
                            style={{width: "100px", marginLeft: "2.5px", marginRight: "2.5px"}}
                        />
                        <Form.Input
                            placeholder="Area #"
                            value={area}
                            onChange={({ target }) => setArea(target.value)}
                            style={{width: "100px", marginLeft: "2.5px"}}
                        />
                    </Row>
                    <Row style={{margin: "auto"}}>
                        <Form.Input
                            placeholder="Living #"
                            value={living}
                            onChange={({ target }) => setLiving(target.value)}
                            style={{width: "100px", marginRight: "2.5px"}}
                        />
                        <Form.Input
                            placeholder="Floor #"
                            value={floor}
                            onChange={({ target }) => setFloor(target.value)}
                            style={{width: "100px", marginLeft: "2.5px", marginRight: "2.5px"}}
                        />
                        <Form.Input
                            placeholder="Parking #"
                            value={parking}
                            onChange={({ target }) => setParking(target.value)}
                            style={{width: "100px", marginLeft: "2.5px"}}
                        />
                    </Row>
                    <Form.Input
                        placeholder="Year #"
                        value={year}
                        onChange={({ target }) => setYear(target.value)}
                    />
                    <Form.Input
                        placeholder="Price $"
                        value={price}
                        onChange={({ target }) => setPrice(target.value)}
                    />
                    <Form.TextArea
                        placeholder="Description"
                        value={description}
                        onChange={({ target }) => setDescription(target.value)}
                        style={{height: "300px"}}
                    />
                    <ItemAdd createItem={handleListing} />
                    <Form.Submit disabled={isInvalid} type="submit">
                        Continue
                    </Form.Submit>
                </Form.Base>
            </Form>
        </>
    )
}

export default SellByOwner

