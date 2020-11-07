import React,{useContext} from 'react'
import { useState } from 'react';
import {useParams} from 'react-router-dom'
import { HouseContext } from '../context/houseContext';
function HouseDetail(props){
    const params = useParams()
 
    console.log(params.id)
    const {getHouse} = useContext(HouseContext)
    const houseInfo = getHouse(params.id)

    
    return (
            <h3>{params.id}</h3>
    
    )
}

export default HouseDetail