import { Housecard } from '../components/export';
import React,{useContext} from 'react'
import DefaultImg from '../img/homeicon.png'
import * as ROUTES from '../constants/routes'
import { RentContext } from '../context/rentContext';
import Loading from "../containers/LoadingContainer"
function RentHousecards({props}){
    const {houses,search,favorite,addFavorite,removeFavorite,filterHouses} = useContext(RentContext);
    const icon = favorite?<Housecard.Favorite removeFavorite ={removeFavorite}/>:<Housecard.notFavorite addFavorite={addFavorite}/>
    
    // console.log(houses)
    function singlecard(obj){
        // console.log(obj.main_dir)
        return (
        
        <Housecard.Base key = {obj.R_ID} >  
            <Housecard.ImageContainer> 
                {icon}      
                </Housecard.ImageContainer>                 
            <Housecard.Link to = {`${ROUTES.RENT}/${obj.R_ID}` }>
                
                {/* <Housecard.img src = {obj.pic_dir? obj.pic_dir:DefaultImg} alt ="#"/> */}
                <Housecard.ImageContainer>
                    
                    
                    <Housecard.img src = {obj.main_dir?obj.main_dir:DefaultImg} alt ="#"/>
                </Housecard.ImageContainer>
                <Housecard.TextContainer>
                    <Housecard.Title>City : {obj.city}</Housecard.Title>
                    <Housecard.Text>Street : {obj.street}</Housecard.Text>
                    <Housecard.Text>Rate : {obj.rate ? obj.rate.toLocaleString("en-US", {style: "currency", currency: "USD"}):null}</Housecard.Text>
                </Housecard.TextContainer>

            </Housecard.Link>
            
        </Housecard.Base>
        )
    }
    // console.log(houses)
    // console.log(search)
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
        if(search.length === 0){
            return(
                <>
                
                <Housecard>
                    no result
                </Housecard>
                </>
            )
        }else if(search.length !== 0){
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
           <Loading/>
        )
    }
   
    
}

export default RentHousecards