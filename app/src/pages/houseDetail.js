import React,{useContext} from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {useParams} from 'react-router-dom'
import { Context } from '../context/housesContext';
import {Houseinfo} from '../components/export'
function HouseDetail(props){
    const {houses} = useContext(Context);
    const {id} = useParams()
 
    const [house,setHouse] = useState()
    const [check,setCheck] = useState(false)

    useEffect(()=>{
        if(houses !== undefined){
            houses.map(list=>{
                if(list.S_ID == id){
                    setHouse(list)
                }else{

                }
            })
            
        }else{
            console.log("undefined house")
        }
        if(house !== undefined){
            setCheck(true)
        }else{
            setCheck(false)
        }
    })
    

    if(check) {
        return(
            <Houseinfo>
                <Houseinfo.img src = {house.pic_dir}/>
                <Houseinfo.Title>{house.name}</Houseinfo.Title>
                <Houseinfo.Text>Owner_ID : {house.Owner_ID}</Houseinfo.Text>
                <Houseinfo.Text>Realtor_ID : {house.Owner_ID}</Houseinfo.Text>
                <Houseinfo.Text>property_type : {house.property_type}</Houseinfo.Text>
                <Houseinfo.Text>Price : {house.price ? house.price.toLocaleString("en-US", {style: "currency", currency: "USD"}):null}</Houseinfo.Text>
                <Houseinfo.Text>year : {house.year_built}</Houseinfo.Text>
                <Houseinfo.Text>location : {house.city+" "+house.street+" "+house.street_num+" "+house.state}</Houseinfo.Text>
                <Houseinfo.Text>zip : {house.zip}</Houseinfo.Text>
                <Houseinfo.Text>area : {house.area}</Houseinfo.Text>
                <Houseinfo.Text>parking : {house.parking}</Houseinfo.Text>
            </Houseinfo>
        )
    }
    else
    {return (
        <>
            <Houseinfo.Text>loading...</Houseinfo.Text>
        </>
    )}
}

export default HouseDetail