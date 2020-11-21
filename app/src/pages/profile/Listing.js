import React,{useEffect,useContext,useState} from 'react'
import { Housecard } from '../../components/export';
import DefaultImg from '../../img/homeicon.png'
import * as ROUTES from '../../constants/routes'
import Loading from "../../containers/LoadingContainer"
function Listing() {
    const user = JSON.parse(localStorage.getItem('authUser'))
    const Application_URL = `http://localhost:9000/users/${user.id}/forSaleListing`
    const [Listing, setListing] = useState()
    useEffect( ()=>{
        try{
            fetch(Application_URL, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ID: user.id,
                })
            }).then(res => res.json()).then(result=>{
                setListing(result.dataset)
             
            })
        }catch(e){
            console.log(e);
        }
   
},[])
    function ListingCard(obj){
        // console.log(obj.main_dir)
        return (
        <Housecard.Base key = {obj.S_ID} >               
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
    if(Listing){
        const  cards = Listing.map(item=>ListingCard(item));
        return(
            <>
            {cards}
            </>
        )
    }else{
        return( <Loading/>)
    }
   
}

export default Listing
