import React,{useEffect,useState} from 'react'
import {ListingForm,Application,Profile } from '../../components/export';
import DefaultImg from '../../img/homeicon.png'
import * as ROUTES from '../../constants/routes'
import Loading from "../../containers/LoadingContainer"

function Listing() {
    const user = JSON.parse(localStorage.getItem('authUser'))
    const Application_URL = `http://localhost:9000/users/${user.id}/forSaleListing`
    const [Listing, setListing] = useState()
    const [ID,setID] = useState();
    const [display,setDisplay] = useState("none")
    const [openDisplay,setOpenDisplay] = useState("none")
    const Update_URL = "http://localhost:9000/updateForSale"
    const Delete_URL = 'http://localhost:9000/deleteForSale'
    const OpenHouse_URL = 'http://localhost:9000/openHouse'
    const [check,setCheck] = useState(false)      

    const [PropertyType,setPropertyType]= useState()
    const [apart_number,setApart_number]= useState()
    const [Street,setStreet]= useState()
    const [Zip,setZip]= useState()
    const [City,setCity]= useState()
    const [State,setState]= useState()
    const [Price,setPrice]= useState()
    const [Bedroom,setBedroom]= useState()
    const [Bathroom,setBathroom]= useState()
    const [Livingroom,setLivingroom] = useState()
    const [Parking,setParking] = useState()
    const [Year,setYear] = useState()
    const [Area,setArea] = useState()
    const [Description,setDescription] = useState()
    const [Pic_dir,setPic_dir] = useState()
    const [Main_dir,setMain_dir] = useState()
    const [Flooring,setFlooring] = useState()
    
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()

    const isInvalid = PropertyType === '' || Street === '' || Zip ==='' ||City === ''||Price === ''||Bedroom === ''||Parking===''||Description===''; 
    const OpenisInvalid = startDate === '' | endDate === '';
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
   
},[check])

    function toggleDisplay(id){
        if(display === "none")
            {
            setDisplay("display")
            setID(id)
            Listing.map(item=> {if(item.S_ID === id ){
                setPropertyType(item.property_type)
                setApart_number(item.apt_num)
                setStreet(item.street)
                setZip(item.zip)
                setCity(item.city)
                setState(item.state)
                setPrice(item.price)
                setBedroom(item.bedroom)
                setBathroom(item.bathroom)
                setLivingroom(item.livingroom)
                setParking(item.parking)
                setYear(item.year_built)
                setArea(item.area)
                setPic_dir(item.pic_dir)
                setMain_dir(item.main_dir)
                setDescription(item.description)
                setFlooring(item.flooring)
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
                    S_ID : id
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
                        flooring: Flooring,
                        livingroom : Livingroom,
                        parking : Parking,
                        price : Price,
                        p_type : PropertyType,
                        state : State,
                        street : Street,
                        year : Year,
                        zip:Zip,
                        S_ID: ID,
                        description:Description,
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
    function toggleOpenhouse(id){
        if(openDisplay === "none")
            {
            setOpenDisplay("display")
            setID(id)
        }
            
        else{
            setOpenDisplay("none")
        }
    }

    async function handleOpenHouse (event){
        
        event.preventDefault();
            console.log(ID)
            try{
                let res = await fetch(OpenHouse_URL, {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      S_ID : ID,
                      from_date : startDate,
                      to_date :endDate
                    })
                });
                let result = await res.json();
                console.log(result);
       
                if(result && result.success){
                    console.log("successful submited OpenHouse");
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
                <ListingForm.Title>{obj.price ? obj.price.toLocaleString("en-US", {style: "currency", currency: "USD"}):null}</ListingForm.Title>
                <ListingForm.Text>{obj.city+" "+obj.state}</ListingForm.Text>
                        <ListingForm.Text>{obj.street}</ListingForm.Text>
                        
                    </ListingForm.TextContainer>
                <ListingForm.Button to={'#'} func={toggleOpenhouse} id={obj.S_ID}>Open House</ListingForm.Button>
                <ListingForm.Button to={'#'} func={toggleDisplay} id={obj.S_ID}>Update</ListingForm.Button>
                <ListingForm.Button to={ROUTES.LISTING} func={handleDelete} id={obj.S_ID}>Remove</ListingForm.Button>
            </ListingForm.Base>  

   
        )
    }

    if(Listing&&Listing.length){
        const  cards = Listing.map(item=>ListingCard(item));
        console.log(isInvalid)
        return(
            <Profile>
                <Profile.Text>
                    Listing
                </Profile.Text>
            <ListingForm>
                {cards}
                </ListingForm>
            
            <Application display = {display} >
            </Application>
            <Application.Base display = {display}>

                        <Application.Close toggleDisplay={toggleDisplay}><i className="far fa-window-close"></i></Application.Close>
                        <Application.Title>Update Form</Application.Title>
                        <Application.InputArea onSubmit={handleUpdate} method="POST" Scroll = "scroll">
                        
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
                                    defaultValue ={Price}
                                    onChange={({ target }) => setPrice(target.value)}
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
                                <Application.Text>Flooring</Application.Text> 
                                <Application.Input  
                                    placeholder="Flooring"
                                    defaultValue ={Flooring}
                                    onChange={({ target }) => setFlooring(target.value)}
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
                
                
            <Application display = {openDisplay} >
            </Application>
            <Application.Base display = {openDisplay}>

                        <Application.Close toggleDisplay={toggleOpenhouse}><i className="far fa-window-close"></i></Application.Close>
                        <Application.Title>OpenHouse Form</Application.Title>
                        <Application.InputArea onSubmit={handleOpenHouse} method="POST" Scroll = "scroll">
                        
                            <Application.InputField>
                                <Application.Text>Start Date</Application.Text>
                                <Application.Input  
                                    type = "date"
                   
                                    defaultValue ={startDate}
                                    onChange={({ target }) => setStartDate(target.value)}/> 
                           </Application.InputField>
 
                           <Application.InputField>
                                <Application.Text>End Date</Application.Text>
                                <Application.Input  
                                    type = "date"
                 
                                    defaultValue ={endDate}
                                    onChange={({ target }) => setEndDate(target.value)}/> 
                           </Application.InputField>
                        
                            <Application.Submit disabled={OpenisInvalid} onclick={toggleOpenhouse}>Submit</Application.Submit>
                        </Application.InputArea>
                </Application.Base>     
                </Profile>
        )
    }else{
        return(
            <Profile>
                <Profile.Text>
                    Oops you have not list any house yet!
                </Profile.Text>
            </Profile> 
        // <Loading/>
        )
    }
   
}

export default Listing
