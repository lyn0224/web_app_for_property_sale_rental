import { Housecard } from '../components/export';
import React,{useContext} from 'react'
import DefaultImg from '../img/homeicon.png'
import * as ROUTES from '../constants/routes'
import { Context } from '../context/housesContext';
import Loading from "../containers/LoadingContainer"
function Housecards({props}){
    const {houses,search,favorite,addFavorite,removeFavorite,filterHouses} = useContext(Context);
    
    
    // console.log(houses)
    function singlecard(obj,favorite){
        // console.log(favorite)
        // const findFavorite = favorite.filter(house=>{ if(house.properity_id === obj.S_ID){
        //         console.log(house)
        //         console.log(house.properity_id === obj.S_ID)
        //         return house
        // }})
        const icon = favorite?<Housecard.Favorite removeFavorite ={removeFavorite} house = {obj}/>:<Housecard.notFavorite addFavorite={addFavorite} house = {obj}/>
            
        return (
        
        <Housecard.Base key = {obj.S_ID} >  
            <Housecard.ImageContainer> 
                {icon}
                </Housecard.ImageContainer>                 
            <Housecard.Link to = {`${ROUTES.BUY}/${obj.S_ID}` }>
                
                {/* <Housecard.img src = {obj.pic_dir? obj.pic_dir:DefaultImg} alt ="#"/> */}
                <Housecard.Content>
                <Housecard.ImageContainer>
                    
                    <Housecard.img src = {obj.main_dir?obj.main_dir:DefaultImg} alt ="#"/>
                </Housecard.ImageContainer>
                <Housecard.TextContainer>
                    <Housecard.Title><p style={{display:"inline", color: "#ff8286"}}> {obj.property_type} </p>For Sale</Housecard.Title>
                    <Housecard.Price>{obj.price ? obj.price.toLocaleString("en-US", {style: "currency", currency: "USD"}):null}</Housecard.Price>
                    <Housecard.Text> <p style={{display:"inline", color: "#525252", fontWeight :"600", fontSize :"1rem"}}> {obj.city} </p>{obj.state}</Housecard.Text>
                    <Housecard.Text>{obj.street}</Housecard.Text>
                    <Housecard.TextControl>
                        <Housecard.NormalText>{obj.bedroom} <p style={{display:"inline",color: "black",fontWeight :"500"}}>bds</p></Housecard.NormalText>
                        <Housecard.NormalText>{obj.bathroom} <p style={{display:"inline",color: "black", fontWeight :"500"}}>ba</p></Housecard.NormalText>
                        <Housecard.NormalText>{obj.area} <p style={{display:"inline",color: "black",fontWeight :"500"}}>sqft</p></Housecard.NormalText>
                        </Housecard.TextControl>
                </Housecard.TextContainer>
                </Housecard.Content>
            </Housecard.Link>
            
        </Housecard.Base>
        )
    }
    // console.log(houses)
    // console.log(search)
    if(houses && !search){
        const  cards = houses.map(house=>{
            if(favorite!==undefined && favorite){
                const checkFavorite = favorite.find(item=>item.properity_id === house.S_ID)
                console.log(checkFavorite)
                const A = checkFavorite? true : false;
               return singlecard(house,A)
            }else{
                const C = false;
                return singlecard(house,C)
            }
            
        });
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

export default Housecards