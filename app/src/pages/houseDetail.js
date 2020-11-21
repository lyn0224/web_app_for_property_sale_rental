import React,{useContext} from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {useParams} from 'react-router-dom'
import { Context } from '../context/housesContext';
import {Houseinfo} from '../components/export'
import { Application } from '../components/export';
function HouseDetail(props){
    const {houses} = useContext(Context);
    const {id} = useParams()
 
    const [house,setHouse] = useState()
    const [check,setCheck] = useState(false)
    const [display,setDisplay] = useState("none")
    const [name,setName]= useState()
    const [Application_price,setApplication_price]= useState()

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
    
    const Applicaiton_URL = "#"
    async function handleApplication (event){
        //console.log(username, emailAddress, password, firstName, lastName, zipcode, phone);
        event.preventDefault();
            try{
                let res = await fetch(Applicaiton_URL, {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name,
                        price : Application_price,
                        // houseinfo:house,
                    })
                });
                let result = await res.json();
                console.log(result);
                if(result && result.success){
                    console.log("successful submited applciation");
                }else if(result && result.success === false){
             
                    alert(result.msg);
                }
            }catch(e){
                console.log(e);
      
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
                        <Application.InputArea onSubmit={handleApplication} method="POST">
                            <Application.Title>Application Form</Application.Title>
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

                            <Application.Submit disabled={!isInvalid}>Submit</Application.Submit>
                        </Application.InputArea>
                </Application.Base>
           
            
          </>
        )
    }
    else
    {return (
        <>
            <Houseinfo.Text>loading...</Houseinfo.Text>
        </>
    )}
}

export default HouseDetail