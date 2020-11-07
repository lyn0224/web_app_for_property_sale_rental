import { Housecard } from '../components/export';
import React,{useContext} from 'react'
import DefaultImg from '../img/homeicon.png'
import * as ROUTES from '../constants/routes'
import {HouseContext} from '../context/houseContext'
import { withHousesConsumer } from '../context/houseContext';
function Housecards({context}){
    const {houses} = context;
    console.log(houses)
    function singlecard(obj){
        return <Housecard.Base key = {obj.id}>
                    <Housecard.Link to = {`/houses/${obj.id}` }>
                        <Housecard.img src = {obj.images[0]} alt ="#"/>
                        <Housecard.Title>Name : {obj.name}</Housecard.Title>
                        <Housecard.Text>Type : {obj.type}</Housecard.Text>
                        <Housecard.Text>Price : {obj.price ? obj.price.toLocaleString("en-US", {style: "currency", currency: "USD"}):null}</Housecard.Text>
                    </Housecard.Link>
                </Housecard.Base>
    }

    const cards = houses.map(house => singlecard(house))
    return(
        <Housecard>
            {cards}
        </Housecard>
    )
}

export default withHousesConsumer(Housecards)