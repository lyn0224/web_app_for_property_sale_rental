import React,{useContext} from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {useParams} from 'react-router-dom'
import { RentContext } from '../context/rentContext';
import {Houseinfo} from '../components/export'
import { Application } from '../components/export';
import LoadingContainer from '../containers/LoadingContainer'
function RentHouseDetail(props){
    const {houses} = useContext(RentContext);
    const {id} = useParams()
 
    const [house,setHouse] = useState()
    const [check,setCheck] = useState(false)
    const [display,setDisplay] = useState("none")
    const [name,setName]= useState('')
    const [credit,setCredit]= useState('')
    const [employer,setEmployer]= useState('')
    const [income,setIncome]= useState('')

    const user = JSON.parse(localStorage.getItem('authUser'));
    const isInvalid =  name === '' || credit === '' || employer === '' || income === '';
    useEffect(()=>{
        if(houses !== undefined){
            houses.map(list=>{
                if(list.R_ID == id){
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
    
    const Rent_Applicaiton_URL = "http://localhost:9000/rentRequest"
    async function handleApplication (event){
        
        event.preventDefault();
        if(user){
            console.log(user.id)
            console.log(house.R_ID)
            console.log(name)
            console.log(credit)
            console.log(employer)
            console.log(income)
            try{
                let res = await fetch(Rent_Applicaiton_URL, {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        ID : user.id,
                        R_ID : house.R_ID,
                        renter_name: name,
                        credit_score: credit,
                        employer: employer,
                        annual_salary: income
                        // houseinfo:house,
                    })
                });
                let result = await res.json();
                console.log(result);
                alert(result.msg);
                if(result && result.success){
                    alert(result.msg);
                    console.log("successful submited applciation");
                }else if(result && result.success === false){
             
                    alert(result.msg);
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
                        <Houseinfo.Text>Rate : {house.rate ? house.rate.toLocaleString("en-US", {style: "currency", currency: "USD"}):null}</Houseinfo.Text>
                        <Houseinfo.Text>year : {house.year_built}</Houseinfo.Text>
                        <Houseinfo.Text>location : {house.city+" "+house.street+" "+house.street_num+" "+house.state}</Houseinfo.Text>
                        <Houseinfo.Text>zip : {house.zip}</Houseinfo.Text>
                        <Houseinfo.Text>area : {house.area}</Houseinfo.Text>
                        <Houseinfo.Text>parking : {house.parking}</Houseinfo.Text>
                        <Houseinfo.Text>flooring : {house.flooring}</Houseinfo.Text>
                        <Houseinfo.Text>available : {house.available_date}</Houseinfo.Text>
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
                                 placeholder="Credit Score"
                                 value={credit}
                                 onChange={({ target }) => setCredit(target.value)}>
                            </Application.Input>
                            <Application.Input
                                 placeholder="Employer Information"
                                 value={employer}
                                 onChange={({ target }) => setEmployer(target.value)}>
                            </Application.Input>
                            <Application.Input
                                 placeholder="Annual Income"
                                 value={income}
                                 onChange={({ target }) => setIncome(target.value)}>
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

export default RentHouseDetail