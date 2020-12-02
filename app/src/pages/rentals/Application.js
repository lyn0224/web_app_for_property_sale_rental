import React,{useEffect, useState,useContext} from 'react'
import {ApplicationForm} from '../../components/export'
import defaultimg from "../../img/homeicon.png"
import Loading from "../../containers/LoadingContainer"
import {DB} from '../../constants/DB'
function Application(){
    const user = JSON.parse(localStorage.getItem('authUser'))
    const Rent_Application_URL = `${DB}/users/${user.id}/renterApplication`
    const Rent_Contact_URL = `${DB}/approveRent`
    const Rent_Reject_URL = `${DB}/rejectRent`
    const [Applications, setApplciaitons] = useState()
    console.log(Rent_Application_URL)
    useEffect( ()=>{
            try{
                fetch(Rent_Application_URL, {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        ID: user.id,
                    })
                }).then(res => res.json()).then(result=>{
                    console.log(result)
                    setApplciaitons(result.dataset)
                 
                })
            }catch(e){
                console.log(e);
            }
       
    },[])
    async function Reject(property_id,renter_name){
        try{
            fetch(Rent_Reject_URL, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    renter_ID: user.id,
                    property_ID:property_id,
                    renter_name: renter_name
                })
            }).then(res => res.json()).then(result=>{
                setApplciaitons(result.dataset)
             
            })
        }catch(e){
            console.log(e);
        }
    }
    async function Contact(property_id,buyer_name){
        try{
            fetch(Rent_Contact_URL, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    renter_ID: user.id,
                    property_ID:property_id,
                    renter_name: buyer_name
                })
            }).then(res => res.json()).then(result=>{
                setApplciaitons(result.dataset)
             
            })
        }catch(e){
            console.log(e);
        }

    }
    function ROWS(obj){
     
         
        return(
            <ApplicationForm.Card key={Math.random()}>
           
                <ApplicationForm.ImageContainer>
                    <ApplicationForm.Image src = {obj.main_pic?obj.main_pic:defaultimg} alt = {"#"}/>
                </ApplicationForm.ImageContainer>
                {/* <ApplicationForm.Text>Name : {obj.name}</ApplicationForm.Text>
                <ApplicationForm.Text>Property : {obj.property_ID}</ApplicationForm.Text> */}
                <ApplicationForm.Text>Credit scoere : {obj.credit_score}</ApplicationForm.Text>
                <ApplicationForm.Text>Employer : {obj.employer}</ApplicationForm.Text>
                <ApplicationForm.Text>Annual salary : {obj.annual_salary}</ApplicationForm.Text>
                <ApplicationForm.Button onclick ={Contact} id ={obj.property_ID}name = {obj.name}>Contact</ApplicationForm.Button>
                <ApplicationForm.Button onclick ={Reject} id ={obj.property_ID} name = {obj.name}>Reject</ApplicationForm.Button>
            </ApplicationForm.Card>
            )
        }

    

    if(Applications)
   { 
    const applicants = Applications.map(applicant=>ROWS(applicant))

    return(
    <>
    <ApplicationForm>
        {applicants}
        </ApplicationForm>
    
    </>
    )}
    else{
        return <Loading/>
    }
}

export default Application