import { Form } from '../../components/export';
import React, { useState, useContext } from 'react';
import {Row} from "react-bootstrap"
import ItemAdd from "../../components/itemAdd"
import axios from 'axios';
// import rentNavbar from '../../containers/rentNav'

function RentByOwner() {
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
    const [available, setAvailable] = useState('');
    const [rate, setRate] = useState('');
    const [term, setTerm] = useState('');
    const [deposite, setDeposite] = useState('');
    const [ammenities, setAmmenities] = useState('');
    const [bed, setBed] = useState('');
    const [bath, setBath] = useState('');
    const [area, setArea] = useState('');
    const [living, setLiving] = useState('');
    const [floor, setFloor] = useState('');
    const [parking, setParking] = useState('');
    const [price, setPrice] = useState('');
    const [year, setYear] = useState('');
    const [description, setDescription] = useState('');


 
    const createItem= async(newItem) => {
        handleInvalid();
        console.log(error);
        if(error !== ''){
            console.log(newItem);
            console.log('PHOTO:', newItem.image);
            const formData = new FormData();
            formData.append('list_type', "rent");
            formData.append('main', newItem.image[0]);

            newItem.image.slice(1).forEach(file=>{
                formData.append("others", file);
            });

            formData.append('Owner_ID', 2);
            formData.append('Realtor_ID', 1);
            formData.append('property_type', propertyType);
            formData.append('apt_num', aptNum);
            formData.append('street', streetAddress);
            formData.append('city', city);
            formData.append('state', states);
            formData.append('zip', zipCode);
            formData.append('available_date', available);
            formData.append('rate', rate);
            formData.append('lease_term', term);
            formData.append('security_deposit', deposite);
            formData.append('ammenities', ammenities);
            formData.append('bedroom', bed);
            formData.append('bathroom', bath);
            formData.append('livingroom', living);
            formData.append('flooring', floor);
            formData.append('parking', parking);
            formData.append('area', area);
            formData.append('year_built', year);
            formData.append('description', description);
            formData.append('status', 'A');
        
            axios({
                method: "POST",
                url: 'http://localhost:9000/upload',
                data: formData,
                headers: {
                  "Content-Type": "multipart/form-data"
                }
            });
        }else{
            setAptNum('');
            setArea('');
            setBath('');
            setBed('');
            setCity('');
            setDescription('');
            setFloor('');
            setLiving('');
            setParking('');
        }
        // console.log(formData.get('main'));
        // console.log(formData.get('others'));
        // console.log(formData.get('p_type'));
        // console.log(formData.get('street'));
        // console.log(formData.get('apt_num'));
        // console.log(formData.get('state'));
        // console.log(formData.get('zip'));
        // console.log(formData.get('price'));
        // console.log(formData.get('bedroom'));
        // console.log(formData.get('bathroom'));
        // console.log(formData.get('livingroom'));
        // console.log(formData.get('flooring'));
        // console.log(formData.get('parking'));
        // console.log(formData.get('area'));
        // console.log(formData.get('year'));
        // console.log(formData.get('description'));
        // console.log(formData.get('status'));

        
    }
 


    const isInvalid = propertyType === '' || streetAddress === '' || aptNum === '' || city === '' || zipCode === '' || bed === '' || bath === '' || area === '';

    function handleInvalid(){
        let regxAddress = new RegExp("^([0-9a-zA-Z]+)(,\s*[0-9a-zA-Z]+)*$");
        let resultAddress = regxAddress.test(streetAddress);
        if(!resultAddress){
            setError("inValid input for address")
        }
        let regxNum = new RegExp("^[0-9]*$")
        let resultApt = regxNum.test(aptNum);
        let resultBed = regxNum.test(bed);
        let resultBath = regxNum.test(bath);
        let resultArea = regxNum.test(area);
        let resultLiving = regxNum.test(living);
        let resultDeposite = regxNum.test(deposite);
        let resultRate = regxNum.test(rate);
        if(!resultApt){
            setError("inValid input for apt/unit number")
        }
        if(!resultBed){
            setError("inValid input for bed number")
        }
        if(!resultBath){
            setError("inValid input for bath number")
        }
        if(!resultArea){
            setError("inValid input for area number")
        }
        if(!resultLiving){
            setError("inValid input for living number")
        }
        if(!resultRate){
            setError("inValid input for rate")
        }
        if(!resultDeposite){
            setError("inValid input for deposite")
        }
        let regxCity = new RegExp("^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$");
        let resultCity = regxCity.test(city);
        if(!resultCity){
            setError("inValid input for city")
        }
        let regxZip = new RegExp("^\d{5}(?:[-\s]\d{4})?$");
        let resultZip = regxZip.test(city);
        if(!resultZip){
            setError("inValid input for zip code")
        }
        if(resultZip && resultCity && resultLiving && resultArea && resultBath && resultBed && resultApt){
            setError('');
        }
    }

    return (
        <>
            {/* <rentNavbar/> */}
            <Form style={{backgroundColor: "grey"}}>
                <Form.Title>Post a For Rent by Owner Listing</Form.Title>
                {error && <Form.Error>{error}</Form.Error>}
                <Form.Base>
                    <Form.Select>
                        <Form.Option
                            value="Single House"
                            onChange={({ target }) => setPropertyType(target.value)}
                            >Single House</Form.Option>
                        <Form.Option 
                            value="Townhouse"
                            onChange={({ target }) => setPropertyType(target.value)}
                            >Townhouse</Form.Option>
                        <Form.Option 
                            value="Apartment"
                            onChange={({ target }) => setPropertyType(target.value)}
                            >Apartment</Form.Option>
                    </Form.Select>
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
                            placeholder="Deposite"
                            value={deposite}
                            onChange={({ target }) => setDeposite(target.value)}
                            style={{width: "150px", marginRight: "5px"}}
                        />
                        <Form.Input
                            placeholder="Rate %"
                            value={rate}
                            onChange={({ target }) => setRate(target.value)}
                            style={{width: "150px", marginLeft: "5px"}}
                        />
                    </Row>
                    <Row style={{margin: "auto"}}>
                        <Form.Input
                            placeholder="Available Date"
                            value={available}
                            onChange={({ target }) => setAvailable(target.value)}
                            style={{width: "150px", marginRight: "5px"}}
                        />
                        <Form.Select style={{width: "150px", marginLeft: "6px"}}>
                                <Form.Option
                                    value="3"
                                    onChange={({ target }) => setTerm(target.value)}
                                    >3 months</Form.Option>
                                <Form.Option 
                                    value="6"
                                    onChange={({ target }) => setTerm(target.value)}
                                    >6 months
                                </Form.Option>
                                <Form.Option 
                                    value="12"
                                    onChange={({ target }) => setTerm(target.value)}
                                    >12 months
                                </Form.Option>
                        </Form.Select>
                    </Row>
                    <Row style={{margin: "auto"}}>
                        <Form.Input
                            placeholder="Living #"
                            value={living}
                            onChange={({ target }) => setYear(target.value)}
                            style={{width: "150px", marginRight: "5px"}}
                        />
                        <Form.Input
                            placeholder="Year #"
                            value={year}
                            onChange={({ target }) => setYear(target.value)}
                            style={{width: "150px", marginLeft: "5px"}}
                        />
                    </Row>
                    <Row style={{margin: "auto"}}>
                        <Form.Input
                            placeholder="Bed #"
                            value={bed}
                            onChange={({ target }) => setBed(target.value)}
                            style={{width: "100px", marginRight: "2.5px"}}
                        />
                        <Form.Input
                            placeholder="Bath #"
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
                        <Form.Select style={{width: "150px", marginRight: "6px"}}>
                                <Form.Option
                                    value="Carpet"
                                    onChange={({ target }) => setFloor(target.value)}
                                    >Carpet</Form.Option>
                                <Form.Option 
                                    value="Wooden"
                                    onChange={({ target }) => setFloor(target.value)}
                                    >Wooden</Form.Option>
                        </Form.Select>
                        <Form.Select style={{width: "150px", marginLeft: "6px"}}>
                                <Form.Option
                                    value="Open"
                                    onChange={({ target }) => setFloor(1)}
                                    >Open</Form.Option>
                                <Form.Option 
                                    value="Close"
                                    onChange={({ target }) => setFloor(0)}
                                    >Close
                                </Form.Option>
                        </Form.Select>
                    </Row>
                    <Form.Input
                            placeholder="Ammenities"
                            value={ammenities}
                            onChange={({ target }) => setAmmenities(target.value)}
                        />
                    <Form.TextArea
                        placeholder="Description"
                        value={description}
                        onChange={({ target }) => setDescription(target.value)}
                        style={{height: "300px"}}
                    />
                    <ItemAdd maxCount="6" type="Main" createItem={createItem} />
                    {/* <Form.Submit disabled={isInvalid} type="submit">
                        Continue
                    </Form.Submit> */}
                </Form.Base>
            </Form>
        </>
    )
}

export default RentByOwner

