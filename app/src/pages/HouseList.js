import React from "react"
import Search from "../components/Search"
import Footer from "../components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl} from 'react-bootstrap';

function HomeList(){
    const exampleReq = "https://realtor.p.rapidapi.com/properties/list-for-sale";
    
    return(
        <>
            <main>
                <div className ="HomeList">
                    <Search/> 
                    <div className="HomeList-grid-container">
                        <InputGroup className="mb-3">
                            <FormControl
                            placeholder="Search for home"
                            aria-label="Search for home"
                            aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                            <Button variant="outline-secondary">Search</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>

                </div>
            </main>
            <Footer/> 
        </>
    )
}

export default HomeList