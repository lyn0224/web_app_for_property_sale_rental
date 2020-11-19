import { Housecard } from '../components/export';
import React,{useState,useContext,useEffect} from 'react'
import DefaultImg from '../img/homeicon.png'
import * as ROUTES from '../constants/routes'
import { Context } from '../context/housesContext';
import FilterBar from '../components/FilterBar'
function Housecards({props}){
    const {houses,search} = useContext(Context);

    
    function singlecard(obj){
        return (
        <Housecard.Base key = {obj.S_ID} >                          
            <Housecard.Link to = {`${ROUTES.BUY}/${obj.S_ID}` }>
                
                <Housecard.img src = {obj.pic_dir? obj.pic_dir:DefaultImg} alt ="#"/>
                <Housecard.Title>city : {obj.city}</Housecard.Title>
                <Housecard.Text>street : {obj.street}</Housecard.Text>
                <Housecard.Text>Price : {obj.price ? obj.price.toLocaleString("en-US", {style: "currency", currency: "USD"}):null}</Housecard.Text>

            </Housecard.Link>
            
        </Housecard.Base>
        )
    }
    
    console.log(search);
    if(houses && !search){
        const  cards = houses.map(house=>singlecard(house));
        return(
            <>
            <Housecard>
                {cards}
            </Housecard>
            </>
        )
    }else if(houses && search){
        if(search.length === 0 ){

            return(
                <>
                
                <Housecard>
                    no result
                </Housecard>
                </>
            )
        }else{
        const  cards = search.map(house=>singlecard(house));
            return(
                <>
                
                <Housecard>
                    {cards}
                </Housecard>
                </>
            )
        }
    }else{
        return(
            <p>
                loading....
            </p>
        )
    }
   
    
}

export default Housecards