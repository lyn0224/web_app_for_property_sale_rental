import { Housecard } from '../components/export';
import React,{useContext} from 'react'
import DefaultImg from '../img/homeicon.png'
import * as ROUTES from '../constants/routes'
import { Context } from '../context/housesContext';
import Loading from "../components/loading"
function Housecards({props}){
    const {houses,search,favorite,addFavorite,removeFavorite} = useContext(Context);
    const icon = favorite?<Housecard.Favorite removeFavorite ={removeFavorite}/>:<Housecard.notFavorite addFavorite={addFavorite}/>
    
    console.log(houses)
    function singlecard(obj){
        // console.log(obj.main_dir)
        return (
        
        <Housecard.Base key = {obj.S_ID} >  
            <Housecard.ImageContainer> 
                {icon}      
                </Housecard.ImageContainer>                 
            <Housecard.Link to = {`${ROUTES.BUY}/${obj.S_ID}` }>
                
                {/* <Housecard.img src = {obj.pic_dir? obj.pic_dir:DefaultImg} alt ="#"/> */}
                <Housecard.ImageContainer>
                    
                    
                    <Housecard.img src = {obj.main_dir?obj.main_dir:DefaultImg} alt ="#"/>
                </Housecard.ImageContainer>
                <Housecard.TextContainer>
                    <Housecard.Title>city : {obj.city}</Housecard.Title>
                    <Housecard.Text>street : {obj.street}</Housecard.Text>
                    <Housecard.Text>Price : {obj.price ? obj.price.toLocaleString("en-US", {style: "currency", currency: "USD"}):null}</Housecard.Text>
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
           <Loading/>
        )
    }
   
    
}

export default Housecards