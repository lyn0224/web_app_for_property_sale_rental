import React,{useEffect,useContext,useState} from 'react'
import {ListingForm,Application } from '../../components/export';
import DefaultImg from '../../img/homeicon.png'
import * as ROUTES from '../../constants/routes'
import Loading from "../../containers/LoadingContainer"
function Listing() {
    const user = JSON.parse(localStorage.getItem('authUser'))
    const Application_URL = `http://localhost:9000/users/${user.id}/forSaleListing`
    const [Listing, setListing] = useState()
    const [ID,setID] = useState();
    const [display,setDisplay] = useState("none")
    const [name,setName]= useState('')
    const [Application_price,setApplication_price]= useState('')
    const Update_URL = "#"

    const isInvalid =  name === '' || Application_price === '';
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

    function toggleDisplay(id){
        if(display === "none")
            {
            console.log(id)
            setDisplay("display")
            setID(id)}
        else{
            setDisplay("none")
            setID(null)
        }
    }

    async function handleApplication (event){
        
        event.preventDefault();

            try{
                let res = await fetch(Update_URL, {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({

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

    }
    function ListingCard(obj){
        return (
        
            <ListingForm.Base key = {obj.S_ID}>
                <ListingForm.Link to = {`${ROUTES.BUY}/${obj.S_ID}` }>
                    <ListingForm.ImageContainer>
                        <ListingForm.Img src = {obj.main_dir?obj.main_dir:DefaultImg} alt ="#"/>
                    </ListingForm.ImageContainer>
                </ListingForm.Link>
                <ListingForm.TextContainer>
                        <ListingForm.Title>city : {obj.city}</ListingForm.Title>
                        <ListingForm.Text>street : {obj.street}</ListingForm.Text>
                        <ListingForm.Text>Price : {obj.price ? obj.price.toLocaleString("en-US", {style: "currency", currency: "USD"}):null}</ListingForm.Text>
                    </ListingForm.TextContainer>
                <ListingForm.Button to={'#'} func={toggleDisplay} id={obj.S_ID}>Update</ListingForm.Button>
                <ListingForm.Button to={'#'} func={()=>{}} id={obj.S_ID}>Remove</ListingForm.Button>
            </ListingForm.Base>  

   
        )
    }

    if(Listing){
        const  cards = Listing.map(item=>ListingCard(item));
        return(
            <>
            <ListingForm>
                {cards}
                </ListingForm>
            
             
            <Application display = {display} >
            </Application>
            <Application.Base display = {display}>
                        <Application.Close toggleDisplay={toggleDisplay}><i className="far fa-window-close"></i></Application.Close>
                        <Application.InputArea onSubmit={handleApplication} method="POST">
                            <Application.Title>Update Form</Application.Title>
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
    }else{
        return( <Loading/>)
    }
   
}

export default Listing
