import { Housecard } from '../components/export';
import React,{useState,useContext} from 'react'
import DefaultImg from '../img/homeicon.png'
import * as ROUTES from '../constants/routes'
import { Context } from '../context/houseContext';
function Housecards({props}){
    const {houses} = useContext(Context);
   
    // const [hovered, setHovered] = useState(false)


    function singlecard(obj){
        return <Housecard.Base key = {obj.id} >
                                                    
                    <Housecard.Link to = {`${ROUTES.BUY}/${obj.id}` }>
                        
                        <Housecard.img src = {obj.images[0]? obj.images[0]:DefaultImg} alt ="#"/>
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

export default Housecards