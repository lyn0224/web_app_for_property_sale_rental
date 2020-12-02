import React,{useContext} from 'react'
import Loading from "../../containers/LoadingContainer"
import { Housecard,Profile } from '../../components/export';
import { Context } from '../../context/housesContext';
import DefaultImg from '../../img/homeicon.png'
import { Search } from '../../components/searchform/styles/style';
function SaveSearch() {
    const {favorite_search_list} = useContext(Context);
    function RemoveSearch(obj){
        console.log(obj)
        console.log("was deleted")
    }
  

    function singlecard(obj){
        console.log(obj)
        const icon = <Housecard.Favorite removeFavorite ={RemoveSearch} house = {obj}/> 
        return (
            <Housecard.Base key = {Math.random()} >  

                <Housecard.Content>
                <Housecard.ImageContainer>
                    {icon}
                    <Housecard.img src = {DefaultImg} alt ="#"/>
                </Housecard.ImageContainer>
                <Housecard.TextContainer>
                        <Housecard.Title>Search Type<p style={{display:"inline", color: "#ff8286"}}> {obj.search_type === "b"?"Buy":"Rent"} </p></Housecard.Title>
                        <Housecard.Text style={{fontSize:"0.9rem",marginBottom:"0.5rem"}}>Information</Housecard.Text>

                        <Housecard.Text>Type: {obj.home_type?obj.home_type:"No Data"}</Housecard.Text>
                        <Housecard.Text>bds: {obj.bedroom?obj.bedroom:"No Data"}</Housecard.Text>
                        <Housecard.Text>bath: {obj.bathroom?obj.bathroom:"No Data"}</Housecard.Text>
                        <Housecard.Text>min price: {obj.min_price?obj.min_price:"0"}</Housecard.Text>
                        <Housecard.Text>max price: {obj.max_price?obj.max_price:"No Data"}</Housecard.Text>
                        <Housecard.Text>zip code: {obj.zip_code?obj.zip_code:"No Data"}</Housecard.Text>
                            
                </Housecard.TextContainer>

                </Housecard.Content>
                
        </Housecard.Base>
        )
    }
  
    if(favorite_search_list){
        const cards = favorite_search_list.map(listitem=> { 
            return singlecard(listitem)
          })
        return(
            <>
             <Profile>
                <Profile.Text>Saved Search</Profile.Text>
                <Profile.CardsContainer>
                    {cards}
                </Profile.CardsContainer>
            </Profile>
            </>
        )
    }else{
        return(
            <>
             <Profile>
                <Profile.Text>Oops you don't have any saved search yet</Profile.Text>
            </Profile>
            </>
        )
    }

       
   
}

export default SaveSearch
