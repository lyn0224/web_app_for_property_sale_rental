import React,{useEffect, useState,useContext} from 'react'
import {ApplicationForm,Profile} from '../../components/export'
import defaultimg from "../../img/homeicon.png"
import Loading from "../../containers/LoadingContainer"
function Application(){
    const user = JSON.parse(localStorage.getItem('authUser'))
    const Application_URL = `http://localhost:9000/users/${user.id}/buyerApplication`
    const Contact_URL = `http://localhost:9000/approveBuy`
    const Reject_URL = `http://localhost:9000/rejectBuy`
    const [Applications, setApplciaitons] = useState()
    const [check,setCheck] = useState(false) 
    console.log(Applications)
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
       
    },[check])
    async function Reject(property_id,buyer_name,Buyer_ID   ){
        try{
            fetch(Reject_URL, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ID: Buyer_ID,
                    S_ID:property_id,
                    name: buyer_name
                })
            }).then(res => res.json()).then(result=>{
                setApplciaitons(result.dataset)
                console.log("reject");
                console.log(result);
                setCheck(!check)
            })
        }catch(e){
            console.log(e);
        }
    }
    async function Contact(property_id,buyer_name,Buyer_ID){
        try{
            fetch(Contact_URL, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ID: Buyer_ID,
                    S_ID:property_id,
                    name: buyer_name
                })
            }).then(res => res.json()).then(result=>{
                setApplciaitons(result.dataset)
                console.log(result);
                setCheck(!check)
            })
        }catch(e){
            console.log(e);
        }

    }
    function ROWS(obj){
     
         console.log(obj)
        return(
            <ApplicationForm.Card key={Math.random()}>
                <ApplicationForm.ImageContainer>
                    <ApplicationForm.Image src = {obj.main_pic?obj.main_pic:defaultimg} alt = {"#"}/>
                </ApplicationForm.ImageContainer>
                <ApplicationForm.Text>Name : {obj.name}</ApplicationForm.Text>
                <ApplicationForm.Text>Offer Price : {obj.offer_price.toLocaleString("en-US", {style: "currency", currency: "USD"})}</ApplicationForm.Text>
                <ApplicationForm.Text>Property : {obj.property_ID}</ApplicationForm.Text>

                <ApplicationForm.Button onclick ={Contact} id ={obj.property_ID}name = {obj.name} Buyer_ID = {obj.Buyer_ID}>Contact</ApplicationForm.Button>
                <ApplicationForm.Button onclick ={Reject} id ={obj.property_ID} name = {obj.name} Buyer_ID = {obj.Buyer_ID}>Reject</ApplicationForm.Button>
            </ApplicationForm.Card>
            )
        }

    

    if(Applications&&Applications.length>0)
   { 
    const applicants = Applications.map(applicant=>ROWS(applicant))

    return(
        <Profile>
            <ApplicationForm>
                {applicants}
                </ApplicationForm>
    
        </Profile>
    )}
    else{
        return(
            <Profile>
                <Profile.Text>
                    Oops you have not list any Application yet!
                </Profile.Text>
            </Profile>
            // <Loading/>
            )
    }
}

export default Application