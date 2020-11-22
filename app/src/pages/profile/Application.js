import React,{useEffect, useState,useContext} from 'react'
import {ApplicationForm} from '../../components/export'
import defaultimg from "../../img/homeicon.png"
import Loading from "../../containers/LoadingContainer"

function Application(){
    const user = JSON.parse(localStorage.getItem('authUser'))
    const Application_URL = `http://localhost:9000/users/${user.id}/buyerApplication`
    const Contact_URL = `http://localhost:9000/approveBuy`
    const Reject_URL = `http://localhost:9000/rejectBuy`
    const [Applications, setApplciaitons] = useState()
    console.log(Application_URL)
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
                    setApplciaitons(result.dataset)
                 
                })
            }catch(e){
                console.log(e);
            }
       
    },[])
    async function Reject(property_id,buyer_name){
        try{
            fetch(Reject_URL, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ID: user.id,
                    S_ID:property_id,
                    name: buyer_name
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
            fetch(Contact_URL, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ID: user.id,
                    S_ID:property_id,
                    name: buyer_name
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
                    <ApplicationForm.Image src = {defaultimg} alt = {"#"}/>
                </ApplicationForm.ImageContainer>
                <ApplicationForm.Text>Name : {obj.name}</ApplicationForm.Text>
                <ApplicationForm.Text>Offer Price : {obj.offer_price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</ApplicationForm.Text>
                <ApplicationForm.Text>Property : {obj.property_ID}</ApplicationForm.Text>

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