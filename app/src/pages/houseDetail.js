import React,{useContext} from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {useParams} from 'react-router-dom'
import { Context } from '../context/houseContext';
import {Houseinfo} from '../components/export'
function HouseDetail(props){
    const {getHouse} = useContext(Context);
    const {id} = useParams()

    const [house,setHouse] = useState()
    const [check,setCheck] = useState(false)
    
    useEffect(()=>{
        setHouse(getHouse(id));
        if(house){
            console.log(house)
            setCheck(true)
        } else{
            console.log('error')
            setCheck(false)
        } 
    })
    // console.log(house)
    if(check) {
        return(
            <Houseinfo>
                <Houseinfo.img src = {house.images[0]}/>
                <Houseinfo.Title>{house.name}</Houseinfo.Title>
                <Houseinfo.Text>Description : {house.description}</Houseinfo.Text>
                <Houseinfo.Text>pets : {house.pets? "allow":"not allow"}</Houseinfo.Text>
                <Houseinfo.Text>Price : {house.price ? house.price.toLocaleString("en-US", {style: "currency", currency: "USD"}):null}</Houseinfo.Text>
                <Houseinfo.Text>Capacity : {house.capacity}</Houseinfo.Text>
                <Houseinfo.Text>Size : {house.size}</Houseinfo.Text>
            </Houseinfo>
        )
    }
    else
    {return (
        <>
        </>
    )}
}

export default HouseDetail