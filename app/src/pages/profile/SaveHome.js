import React,{useEffect,useContext,useState} from 'react'
import { Housecard,Profile } from '../../components/export';
import DefaultImg from '../../img/homeicon.png'
import * as ROUTES from '../../constants/routes'
import { Context } from '../../context/housesContext';
import { RentContext } from '../../context/rentContext';
import Loading from "../../containers/LoadingContainer"
import {DB} from '../../constants/DB'


function SaveHome(prop) {
    const {houses,favorite,removeFavorite} = useContext(Context);
    const {rentHouses,rentFavorite,removeRentFavorite} = useContext(RentContext);
    // const {houses, setHouses} = useState();
    const user = JSON.parse(localStorage.getItem('authUser'));

    function singlecard(obj){
        // console.log(obj.main_dir)
        const icon = <Housecard.Favorite removeFavorite ={removeFavorite} house = {obj}/> 
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
    const Save_Home = `${DB}/api/favorite/home?id=${user.id}`
    useEffect(()=>{
        // fetch user favorite table here
        // fetch(Save_Home).then(response=>response.json()).then(result=>setHouses(result.list))
           
    },[])

  if(houses&&rentHouses){
        console.log("houses",houses)
        console.log("favorite",favorite)
      const cards = houses.map(house=> { 
          if(favorite){
                const A = favorite.find(index=>house.S_ID === index.properity_id)
                if(A){
                    const B = houses.find(index=>index.S_ID === A.properity_id)
                    return singlecard(B)
                }
            }else{
                return null;
            }  
        })

        const rentcards = rentHouses.map(house=> { 
            if(rentFavorite){
                const A = rentFavorite.find(index=>house.R_ID === index.properity_id)
                if(A){
                    const B = rentHouses.find(index=>index.R_ID === A.properity_id)
                    return singlecard(B)
                }
            }else{
                return null;
            }  
        })
    if(cards[0]!==undefined&&rentcards[0]!==undefined)
      {return(
          <Profile>
              <Profile.Text>
                    Saved Homes
                </Profile.Text>
              <Profile.CardsContainer>
                {cards}
                {rentcards}
              </Profile.CardsContainer>
          </Profile>
      )}
    else{ 
        return(
            <Profile>
                <Profile.Text>
                Oops you dont have any favorited home yet
              </Profile.Text>
             
            </Profile>
        )}
  }else if(rentHouses){
    const rentcards = rentHouses.map(house=> { 
        if(rentFavorite){
            const A = rentFavorite.find(index=>house.R_ID === index.properity_id)
            if(A){
                const B = rentHouses.find(index=>index.R_ID === A.properity_id)
                return singlecard(B)
            }
        }else{
            return null;
        }  
    })

    if(rentcards[0]!==undefined)
    {return(
        <Profile>
            <Profile.Text>
                  Saved Homes
              </Profile.Text>
            <Profile.CardsContainer>

              {rentcards}
            </Profile.CardsContainer>
        </Profile>
    )}
  else{ 
      return(
          <Profile>
              <Profile.Text>
              Oops you dont have any favorited home yet
            </Profile.Text>
           
          </Profile>
      )}

  }
  else if(houses){
        const cards = houses.map(house=> { 
          if(favorite){
                const A = favorite.find(index=>house.S_ID === index.properity_id)
                if(A){
                    const B = houses.find(index=>index.S_ID === A.properity_id)
                    return singlecard(B)
                }
            }else{
                return null;
            }  
        })


        if(cards[0]!==undefined){return(
          <Profile>
              <Profile.Text>
                    Saved Homes
                </Profile.Text>
              <Profile.CardsContainer>
                {cards}
              </Profile.CardsContainer>
          </Profile>
      )}
    else{ 
        return(
            <Profile>
                <Profile.Text>
                Oops you dont have any favorited home yet
              </Profile.Text>
             
            </Profile>
        )}
  }else{
      return( <Loading/>)
  }
    
}

export default SaveHome