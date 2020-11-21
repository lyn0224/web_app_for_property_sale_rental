import React,{useEffect,useContext} from 'react'
import { Housecard } from '../../components/export';
import DefaultImg from '../../img/homeicon.png'
import * as ROUTES from '../../constants/routes'
import { Context } from '../../context/housesContext';
import Loading from "../../containers/LoadingContainer"

// import {Context} from "../../context/SaveHomeContext"

function SaveHome(prop) {
  const {houses} = useContext(Context);
    
  function singlecard(obj){
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
  useEffect(()=>{
      // fetch user favorite table here
  },[])
  if(houses){
      const  cards = houses.map(house=>singlecard(house));
      return(
          <>
           <div>
              This is Save Home page!
          </div>

              {cards}

          </>
      )
  }else{
      return( <Loading/>)
  }
    
}

export default SaveHome
