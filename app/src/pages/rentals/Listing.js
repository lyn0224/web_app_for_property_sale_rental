import React,{useEffect,useState} from 'react'
import {ListingForm,Application } from '../../components/export';
import DefaultImg from '../../img/homeicon.png'
import * as ROUTES from '../../constants/routes'
import Loading from "../../containers/LoadingContainer"
import {DB} from '../../constants/DB'
function Listing() {
    const user = JSON.parse(localStorage.getItem('authUser'))
    
    const [Listing, setListing] = useState()
    const [ID,setID] = useState();
    const [display,setDisplay] = useState("none")


    const Rent_Application_URL = `${DB}/users/${user.id}/forRentListing`
    const Update_URL = `${DB}/updateForRent`
    const Delete_URL = `${DB}/deleteForRent`
    const [check,setCheck] = useState(false)      

    const [PropertyType,setPropertyType]= useState()
    const [apart_number,setApart_number]= useState()
    const [Street,setStreet]= useState()
    const [Zip,setZip]= useState()
    const [City,setCity]= useState()
    const [State,setState]= useState()
    const [Rate,setRate]= useState()
    const [Bedroom,setBedroom]= useState()
    const [Bathroom,setBathroom]= useState()
    const [Livingroom,setLivingroom] = useState()
    const [Parking,setParking] = useState()
    const [Year,setYear] = useState()
    const [Area,setArea] = useState()
    const [Description,setDescription] = useState()
    const [available, setAvailable] = useState()
    const [Pic_dir,setPic_dir] = useState()
    const [Main_dir,setMain_dir] = useState()


    const isInvalid = PropertyType === ''|| Street === '' || Zip ==='' ||City === ''||City === ''||Rate === ''||Bedroom === ''||Parking===''||Description===''; 
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
                setListing(result.dataset)
            })
        }catch(e){
            console.log(e);
        }
   
},[check])

    function toggleDisplay(id){
        if(display === "none")
            {
            setDisplay("display")
            setID(id)
            Listing.map(item=> {if(item.R_ID === id ){
                setPropertyType(item.property_type)
                setApart_number(item.apt_num)
                setStreet(item.street)
                setZip(item.zip)
                setCity(item.city)
                setState(item.state)
                setRate(item.rate)
                setBedroom(item.bedroom)
                setBathroom(item.bathroom)
                setLivingroom(item.livingroom)
                setParking(item.parking)
                setYear(item.year_built)
                setArea(item.area)
                setPic_dir(item.pic_dir)
                setMain_dir(item.main_dir)
                setDescription(item.description)
            }})
           
            
        }
            
        else{
            setDisplay("none")
        }
    }
    async function handleDelete(id){
        try{
            let res = await fetch(Delete_URL, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    R_ID : id
                })
            });
            let result = await res.json();
            console.log(result);
            if(result && result.success){
                console.log("successful delete list");
                setCheck(!check)
            }else if(result && result.success === false){
                
                alert(result.msg);
            }
        }catch(e){
            console.log(e);
  
        }

    }
    
    async function handleUpdate (event){
        
        event.preventDefault();

            try{
                let res = await fetch(Update_URL, {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        apt_num : apart_number,
                        area : Area,
                        bathroom : Bathroom,
                        bedroom: Bedroom,
                        city : City,
                        flooring: "carpet",
                        livingroom : Livingroom,
                        parking : Parking,
                        rate : Rate,
                        p_type : "h",
                        state : State,
                        street : Street,
                        year : "2134",
                        zip:Zip,
                        S_ID: ID,
                        status:"A"
                    })
                });
                let result = await res.json();
                console.log(result);
       
                if(result && result.success){
                    console.log("successful submited updated");
                    setCheck(!check)
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
                        <ListingForm.Text>Rate : {obj.rate ? obj.rate.toLocaleString("en-US", {style: "currency", currency: "USD"}):null}</ListingForm.Text>
                    </ListingForm.TextContainer>
                <ListingForm.Button to={'#'} func={toggleDisplay} id={obj.R_ID}>Update</ListingForm.Button>
                <ListingForm.Button to={ROUTES.LISTING} func={handleDelete} id={obj.R_ID}>Remove</ListingForm.Button>
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
                        <Application.Title>Update Form</Application.Title>
                        <Application.InputArea onSubmit={handleUpdate} method="POST">
                        
                            <Application.InputField>
                                <Application.Text>Property Type</Application.Text>
                                <Application.Input  
                                    placeholder="Property Type"
                                    defaultValue ={PropertyType}
                                    onChange={({ target }) => setPropertyType(target.value)}/> 
                           </Application.InputField>
                        
                           <Application.InputField>
                                <Application.Text>Apart number</Application.Text>
                                <Application.Input
                                    placeholder="apart number"
                                    defaultValue ={apart_number}
                                    onChange={({ target }) => setApart_number(target.value)}/>
                                </Application.InputField>

                            <Application.InputField>
                                <Application.Text>Street</Application.Text>
                                <Application.Input  
                                    placeholder="Street"
                                    defaultValue ={Street}
                                    onChange={({ target }) => setStreet(target.value)}/>
                           </Application.InputField>

                           <Application.InputField>
                                <Application.Text>City</Application.Text>
                                <Application.Input  
                                    placeholder="City"
                                    defaultValue ={City}
                                    onChange={({ target }) => setCity(target.value)}/>
                            </Application.InputField>

                            <Application.InputField>
                                <Application.Text>State</Application.Text>
                                <Application.Input  
                                    placeholder="State"
                                    defaultValue ={State}
                                    onChange={({ target }) => setState(target.value)}/>
                            </Application.InputField>

                            <Application.InputField>
                                <Application.Text>Zip-code</Application.Text>
                                <Application.Input  
                                    placeholder="Zip-code"
                                    defaultValue ={Zip}
                                    onChange={({ target }) => setZip(target.value)
                                    }/>
                            </Application.InputField>

                            <Application.InputField>
                                <Application.Text>Price</Application.Text>
                                <Application.Input  
                                    placeholder="Price"
                                    defaultValue ={Rate}
                                    onChange={({ target }) => setRate(target.value)}
                                    />
                             </Application.InputField>

                             <Application.InputField>
                                <Application.Text>Bedroom</Application.Text> 
                                <Application.Input  
                                    placeholder="Bedroom"
                                    defaultValue ={Bedroom}
                                    onChange={({ target }) => setBedroom(target.value)}
                                    />
                            </Application.InputField>
                        
                            <Application.InputField>
                                <Application.Text>Bathroom</Application.Text> 
                                <Application.Input  
                                    placeholder="Bathroom"
                                    defaultValue ={Bathroom}
                                    onChange={({ target }) => setBathroom(target.value)}
                                    />
                            </Application.InputField>

                            <Application.InputField>
                                <Application.Text>Livingroom</Application.Text> 
                                <Application.Input  
                                    placeholder="Livingroom"
                                    defaultValue ={Livingroom}
                                    onChange={({ target }) => setLivingroom(target.value)}
                                    />
                            </Application.InputField>

                            <Application.InputField>
                                <Application.Text>Parking</Application.Text> 
                                <Application.Input  
                                    placeholder="Parking"
                                    defaultValue ={Parking}
                                    onChange={({ target }) => setParking(target.value)}
                                   />
                            </Application.InputField>

                            <Application.InputField>
                                <Application.Text>Area</Application.Text> 
                                <Application.Input  
                                    placeholder="Area"
                                    defaultValue ={Area}
                                    onChange={({ target }) => setArea(target.value)}
                                    />
                            </Application.InputField>

                            <Application.InputField>
                                <Application.Text>Year</Application.Text> 
                                <Application.Input  
                                    placeholder="Year"
                                    defaultValue ={Year}
                                    onChange={({ target }) => setYear(target.value)}
                                    />
                                    
                            </Application.InputField>

                            <Application.InputField>
                                <Application.Text>Description</Application.Text> 
                                <Application.TextArea  
                                    placeholder="Description"
                                    defaultValue ={Description}
                                    onChange={({ target }) => setDescription(target.value)}>
                                </Application.TextArea>
                            </Application.InputField>
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
