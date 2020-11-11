import { Housecard } from '../components/export';
import React,{useState,useContext} from 'react'
import DefaultImg from '../img/homeicon.png'
import * as ROUTES from '../constants/routes'
import { Context } from '../context/housesContext';
import FilterBar from '../components/FilterBar'
function Housecards({props}){
    const {houses} = useContext(Context);
   
    // const [hovered, setHovered] = useState(false)


    function singlecard(obj){
        return (
        <Housecard.Base key = {obj.S_ID} >
            <div>{obj}</div>                           
            <Housecard.Link to = {`${ROUTES.BUY}/${obj.S_ID}` }>
                
                {/* <Housecard.img src = {obj.pic_dir[0]? obj.pic_dir[0]:DefaultImg} alt ="#"/> */}
                <Housecard.Title>Name : {obj.property_type==="H" ? "Single House" : "Others" }</Housecard.Title>
                <Housecard.Text>Type : {obj.street}</Housecard.Text>
                <Housecard.Text>Price : {obj.price ? obj.price.toLocaleString("en-US", {style: "currency", currency: "USD"}):null}</Housecard.Text>

            </Housecard.Link>
            
        </Housecard.Base>
        )
    }

    // const cards = houses.Array.forEach((house, index) => {
    //     console.log(index, house)
    // })
    //(house => singlecard(house));
    //const cards = houses.map(house => console.log(house))
    //const cards = houses.map(house => singlecard(house));
    //const result = Object.values(houses);
    const cards = houses.map(house => singlecard(house));
    return(
        <>
        {/* <FilterBar houses={houses} /> */}
        <div>This is house card</div>
        {/* <div>{result}</div> */}
        <Housecard>
            {cards}
        </Housecard>
        </>
    )
}

export default Housecards