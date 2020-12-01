import { Housecard } from '../components/export';
import React,{useContext} from 'react'
import DefaultImg from '../img/homeicon.png'
import * as ROUTES from '../constants/routes'
import { Context } from '../context/realtorContext';
import Loading from "../containers/LoadingContainer"
import Realtor from '../pages/realtor/realtors';

function RentHousecards({props}){
    const {realtors,search} = useContext(Context);
    
    // console.log(houses)
    function singlecard(obj){
        // console.log(obj.main_dir)
        return (

        <Housecard.Base key = {obj.U_ID} >  
            <Housecard.ImageContainer>      
                </Housecard.ImageContainer>                 
            <Housecard.Link to = {`${ROUTES.AGENT_FINDER}/${obj.U_ID}` }>
                <Housecard.TextContainer>
                <Housecard.Title>{obj.Fname} {obj.Lname}</Housecard.Title>
                    <Housecard.Text>Email : {obj.Email}</Housecard.Text>
                    <Housecard.Text>ZipCode : {obj.zipcode}</Housecard.Text>
                </Housecard.TextContainer>

            </Housecard.Link>
            
        </Housecard.Base>
        )
    }

    if(realtors && !search){
        const  cards = realtors.map(realtor=>singlecard(realtor));
        return(
            <>
            <Housecard>
                {cards}
            </Housecard>
            </>
        )
    }else if(realtors && search){
        if(search.length === 0){
            return(
                <>
                
                <Housecard>
                    no result
                </Housecard>
                </>
            )
        }else if(search.length !== 0){
        const  cards = search.map(realtor=>singlecard(realtor));
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