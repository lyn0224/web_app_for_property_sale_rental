import { Housecard } from '../components/export';
import React,{useState,useContext} from 'react'
import DefaultImg from '../img/homeicon.png'
import * as ROUTES from '../constants/routes'
import { Context } from '../context/housesContext';
import FilterBar from '../components/FilterBar'
function Housecards({props}){
    const {houses,isLoading} = useContext(Context);
   
    // const [hovered, setHovered] = useState(false)
    console.log(houses)
    function singlecard(obj){
        return (
        <Housecard.Base key = {obj.S_ID} >                          
            <Housecard.Link to = {`${ROUTES.BUY}/${obj.S_ID}` }>
                
                <Housecard.img src = {DefaultImg} alt ="#"/>
                <Housecard.Title>city : {obj.city}</Housecard.Title>
                <Housecard.Text>street : {obj.street}</Housecard.Text>
                <Housecard.Text>Price : {obj.price ? obj.price.toLocaleString("en-US", {style: "currency", currency: "USD"}):null}</Housecard.Text>

            </Housecard.Link>
            
        </Housecard.Base>
        )
    }
    const cards = houses? houses.map(house=>singlecard(house)):"loading...";
    return(

        <>
          
        <Housecard>
            {cards}
            {/* {`${isLoading}`} */}
        </Housecard>
        </>
    )
}

export default Housecards