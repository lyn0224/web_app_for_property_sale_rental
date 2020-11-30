import { Form } from '../components/export';
import React, { useState, useContext, useEffect } from 'react';
import {Row} from "react-bootstrap"
import ItemAdd from "../components/itemAdd"
import axios from 'axios';
 
function SellByOwner() {
    const [sellID, setSellID] = useState('');
    const [ownerID, setOwnerID] = useState('');
    const [realtorID, setRealtorID] = useState('');
    const [error, setError] = useState('');
    const [propertyType, setPropertyType] = useState("Single House");
    const [streetAddress, setStreetAddress] = useState('');
    const [aptNum, setAptNum] = useState('');
    const [city, setCity] = useState('');
    const [states, setStates] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [bed, setBed] = useState('');
    const [bath, setBath] = useState('');
    const [area, setArea] = useState('');
    const [living, setLiving] = useState('');
    const [floor, setFloor] = useState("Carpet");
    const [parking, setParking] = useState(1);
    const [price, setPrice] = useState('');
    const [year, setYear] = useState('');
    const [mainPictures, setMainPictures] = useState([]);
    const [otherPictures, setOtherPictures] = useState([]);
    const [description, setDescription] = useState('');
    const [data,setData] = useState();
    const [info,setInfo] = useState(false);
 
    const user = JSON.parse(localStorage.getItem('authUser'));
    useEffect(()=>{
        console.log("update")
        if(data){
            setMainPictures(data.image[0])
            let array = []
            data.image.slice(1).forEach(file=>{
                array.push(file)
            });
            setOtherPictures(array);
        }
        console.log(propertyType);
        console.log(floor);
        console.log(mainPictures);
        console.log(otherPictures);
        // setPictures(formData);
    },[data, floor, propertyType])

    const createItem= async(newItem) => {
        console.log(error);
        console.log(newItem);
        console.log('PHOTO:', newItem.image);
        setData(newItem);
        setInfo(true);
    }
 
    const isInvalid = price === '' || mainPictures === '' || otherPictures === '' || propertyType === '' || streetAddress === '' || city === '' || states === '' || zipCode === '' || bed === '' || bath === '' || area === '' || year === '' || description === '' || parking === '' || floor === '' || living === '';

    async function handleSubmit(){
        const formData = new FormData();
        formData.append('list_type', "sell");
        formData.append('main', mainPictures);
        formData.append('others', otherPictures);

        formData.append('owner', user.id);
        formData.append('realtor', 1);
        formData.append('p_type', propertyType);
        formData.append('apt_num', aptNum);
        formData.append('street', streetAddress);
        formData.append('city', city);
        formData.append('state', states);
        formData.append('zip', zipCode);
        formData.append('price', price);
        formData.append('bedroom', bed);
        formData.append('bathroom', bath);
        formData.append('livingroom', living);
        formData.append('flooring', floor);
        formData.append('parking', parking);
        formData.append('area', area);
        formData.append('year', year);
        formData.append('description', description);
        formData.append('status', 'A');
        // setData(formData)
        console.log("formData",formData);
        axios({
            method: "POST",
            url: 'http://localhost:9000/upload',
            data: formData,
            headers: {
            "Content-Type": "multipart/form-data"
            }
        });
    }

    // function handleInvalid(){
    //     let regxAddress = new RegExp("^([0-9a-zA-Z]+)(,\s*[0-9a-zA-Z]+)*$");
    //     let resultAddress = regxAddress.test(streetAddress);
    //     if(!resultAddress){
    //         setError("inValid input for address")
    //     }
    //     let regxNum = new RegExp("^[0-9]*$")
    //     let resultApt = regxNum.test(aptNum);
    //     let resultBed = regxNum.test(bed);
    //     let resultBath = regxNum.test(bath);
    //     let resultArea = regxNum.test(area);
    //     let resultLiving = regxNum.test(living);
    //     let resultPrice = regxNum.test(price);
    //     if(!resultApt){
    //         console.log("inValid input for apt/unit number")
    //         setError("inValid input for apt/unit number")
    //     }
    //     if(!resultBed){
    //         setError("inValid input for bed number")
    //     }
    //     if(!resultBath){
    //         setError("inValid input for bath number")
    //     }
    //     if(!resultArea){
    //         setError("inValid input for area number")
    //     }
    //     if(!resultLiving){
    //         setError("inValid input for living number")
    //     }
    //     if(!resultPrice){
    //         setError("inValid input for price")
    //     }
    //     let regxCity = new RegExp("^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$");
    //     let resultCity = regxCity.test(city);
    //     if(!resultCity){
    //         setError("inValid input for city")
    //     }
    //     let regxZip = new RegExp("^\d{5}(?:[-\s]\d{4})?$");
    //     let resultZip = regxZip.test(zipCode);
    //     if(!resultZip){
    //         setError("inValid input for zip code")
    //     }
    //     if(resultZip && resultCity && resultLiving && resultArea && resultBath && resultBed && resultApt){
    //         setError('');
    //     }
    // }
    if(info){
        return (
            <>
               <Form style={{backgroundColor: "grey"}}>
                    <Form.Title>Post a For Sale by Owner Listing</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSubmit}>
                        <Form.Select onChange={({ target }) => setPropertyType(target.value)}>
                            <Form.Option
                                value="Single House"
                                >Single House</Form.Option>
                            <Form.Option 
                                value="Townhouse"
                                >Townhouse</Form.Option>
                            <Form.Option 
                                value="Apartment"
                                >Apartment</Form.Option>
                        </Form.Select>
                        <Form.Input
                            placeholder="Street Address"
                            value={streetAddress}
                            onChange={({ target }) => setStreetAddress(target.value)}
                            pattern="^\d{1,6}\040([A-Z]{1}[a-z]{1,}\040[A-Z]{1}[a-z]{1,})$|^\d{1,6}\040([A-Z]{1}[a-z]{1,}\040[A-Z]{1}[a-z]{1,}\040[A-Z]{1}[a-z]{1,})$|^\d{1,6}\040([A-Z]{1}[a-z]{1,}\040[A-Z]{1}[a-z]{1,}\040[A-Z]{1}[a-z]{1,}\040[A-Z]{1}[a-z]{1,})$"
                        />
                        <Row style={{margin: "auto"}}>
                            <Form.Input
                                placeholder="Apt #"
                                value={aptNum}
                                onChange={({ target }) => setAptNum(target.value)}
                                style={{width: "150px", marginRight: "5px"}}
                                pattern="^[0-9]*$"
                            />
                            <Form.Input
                                placeholder="City"
                                value={city}
                                onChange={({ target }) => setCity(target.value)}
                                style={{width: "150px", marginLeft: "5px"}}
                                pattern="^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$"
                            />
                        </Row>
                        <Row style={{margin: "auto"}}>
                            <Form.Input
                                placeholder="Zip #"
                                value={zipCode}
                                onChange={({ target }) => setZipCode(target.value)}
                                style={{width: "150px", marginRight: "5px"}}
                                pattern="[0-9]{5}"
                            />
                            <Form.Input
                                placeholder="State"
                                value={states}
                                onChange={({ target }) => setStates(target.value)}
                                style={{width: "150px", marginLeft: "5px"}}
                                //pattern="[A-Z][a-z]"
                            />
                        </Row>
                        <Row style={{margin: "auto"}}>
                            <Form.Input
                                placeholder="Living #"
                                value={living}
                                onChange={({ target }) => setLiving(target.value)}
                                style={{width: "150px", marginRight: "5px"}}
                                pattern="^[0-9]*$"
                            />
                            <Form.Input
                                placeholder="Year #"
                                value={year}
                                onChange={({ target }) => setYear(target.value)}
                                style={{width: "150px", marginLeft: "5px"}}
                                pattern="[0-9]{4}"
                            />
                        </Row>
                        <Row style={{margin: "auto"}}>
                            <Form.Input
                                placeholder="Bed #"
                                value={bed}
                                onChange={({ target }) => setBed(target.value)}
                                style={{width: "100px", marginRight: "2.5px"}}
                                pattern="[0-9]{1}"
                            />
                            <Form.Input
                                placeholder="Bath #"
                                value={bath}
                                onChange={({ target }) => setBath(target.value)}
                                style={{width: "100px", marginLeft: "2.5px", marginRight: "2.5px"}}
                                pattern="[0-9]{1}"
                            />
                            <Form.Input
                                placeholder="Area #"
                                value={area}
                                onChange={({ target }) => setArea(target.value)}
                                style={{width: "100px", marginLeft: "2.5px"}}
                                pattern="^[0-9]*$"
                            />
                        </Row>
                        <Row style={{margin: "auto"}}>
                            <Form.Select style={{width: "150px", marginRight: "6px"}} onChange={({ target }) => setFloor(target.value)}>
                                    <Form.Option
                                        value="Carpet"
                                        >Carpet</Form.Option>
                                    <Form.Option 
                                        value="Wooden"
                                        >Wooden</Form.Option>
                            </Form.Select>
                            <Form.Select style={{width: "150px", marginLeft: "6px"}} onChange={() => setParking(1)}>
                                    <Form.Option
                                        value="1"
                                        >Open</Form.Option>
                                    <Form.Option 
                                        value="0"
                                        >Close
                                    </Form.Option>
                            </Form.Select>
                        </Row>
                        <Form.Input
                            placeholder="Price $"
                            value={price}
                            onChange={({ target }) => setPrice(target.value)}
                            pattern="^[0-9]*$"
                        />
                        <Form.TextArea
                            placeholder="Description"
                            value={description}
                            onChange={({ target }) => setDescription(target.value)}
                            style={{height: "300px"}}
                        />
                        <Form.Submit type="submit" disable={isInvalid}>
                            Post Listing
                        </Form.Submit>
                    </Form.Base>
                </Form>
            </>
        )
    }else{
        return(
            <ItemAdd maxCount="6" type="Main" createItem={createItem} />
        )
    }
}

export default SellByOwner

