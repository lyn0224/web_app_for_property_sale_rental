import React,{useContext} from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {useParams} from 'react-router-dom'
import { Context } from '../context/housesContext';
import {Houseinfo} from '../components/export'
import { Application } from '../components/export';
import LoadingContainer from '../containers/LoadingContainer'
function HouseDetail(props){
    const {houses} = useContext(Context);
    const {id} = useParams()
 
    const [house,setHouse] = useState()
    const [check,setCheck] = useState(false)
    const [display,setDisplay] = useState("none")
    const [name,setName]= useState('')
    const [Application_price,setApplication_price]= useState('')
    const user = JSON.parse(localStorage.getItem('authUser'));
    const isInvalid =  name === '' || Application_price === '';
    useEffect(()=>{
        if(houses !== undefined){
            houses.map(list=>{
                if(list.S_ID == id){
                    setHouse(list)
                }else{

                }
            })
            
        }else{
            console.log("undefined house")
        }
        if(house !== undefined){
            setCheck(true)
        }else{
            setCheck(false)
        }
    })
    function toggleDisplay(){
        if(display === "none")
            setDisplay("display")
        else
            setDisplay("none")
    }
    const house_imge = check? house.pic_dir.map(image =>(
        <Houseinfo.img key = {Math.random() } src = {image}/>
    )): "null";
    
    const Applicaiton_URL = "http://localhost:9000/buyRequest"
    async function handleApplication (event){
        
        event.preventDefault();
        if(user){
            console.log(user.id)
            console.log(house.S_ID)
            console.log(name)
            console.log(Application_price)
            try{
                let res = await fetch(Applicaiton_URL, {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        ID : user.id,
                        S_ID : house.S_ID,
                        name: name,
                        offer : Application_price,
                        // houseinfo:house,
                    })
                });
                let result = await res.json();
                console.log(result);
                if(result && result.success){
                    console.log(result.msg);
                    console.log("successful submited applciation");
                }else if(result && result.success === false){
             
                    console.log("false"+result.msg);
                }
            }catch(e){
                console.log(e);
      
            }
        }else{
            alert("you need signin to use this function")
        }
    }

    if(check) {
        return(
            <>
             <Houseinfo>
                    <Houseinfo.ImageBase>
                        {house_imge}
                    </Houseinfo.ImageBase>
                    <Houseinfo.Base>
                        <Houseinfo.Title>{house.name}</Houseinfo.Title>
                        <Houseinfo.Text>Owner_ID : {house.Owner_ID}</Houseinfo.Text>
                        <Houseinfo.Text>Realtor_ID : {house.Owner_ID}</Houseinfo.Text>
                        <Houseinfo.Text>property_type : {house.property_type}</Houseinfo.Text>
                        <Houseinfo.Text>Price : {house.price ? house.price.toLocaleString("en-US", {style: "currency", currency: "USD"}):null}</Houseinfo.Text>
                        <Houseinfo.Text>year : {house.year_built}</Houseinfo.Text>
                        <Houseinfo.Text>location : {house.city+" "+house.street+" "+house.street_num+" "+house.state}</Houseinfo.Text>
                        <Houseinfo.Text>zip : {house.zip}</Houseinfo.Text>
                        <Houseinfo.Text>area : {house.area}</Houseinfo.Text>
                        <Houseinfo.Text>parking : {house.parking}</Houseinfo.Text>
                        <Houseinfo.Button to={'#'} toggleDisplay={toggleDisplay}>Application</Houseinfo.Button>
                    </Houseinfo.Base>
                </Houseinfo>
            <Application display = {display} >
                
               
            </Application>
            <Application.Base display = {display}>
                        <Application.Close toggleDisplay={toggleDisplay}><i className="far fa-window-close"></i></Application.Close>
                        <Application.Title>Application Form</Application.Title>
                        <Application.InputArea onSubmit={handleApplication} method="POST" Scroll ="hidden">
                            <Application.Input  
                                placeholder="Name"
                                value={name}
                                onChange={({ target }) => setName(target.value)}>
                            </Application.Input>
                            <Application.Input
                                 placeholder="Price"
                                 value={Application_price}
                                 onChange={({ target }) => setApplication_price(target.value)}>
                            </Application.Input>

                            <Application.Submit disabled={isInvalid} onclick={toggleDisplay}>Submit</Application.Submit>
                        </Application.InputArea>
                </Application.Base>  
          </>
        )
    }
    else
    {return (
        <>
            <LoadingContainer/>
        </>
    )}
}

export default HouseDetail