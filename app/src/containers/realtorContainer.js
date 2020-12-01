
import React,{useState,useContext} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl, Container, Row, Col, Card} from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';
import Footer from "./footer"
import AgentLayout from '../components/agentFinder/agentLayout'
import { Context } from '../context/realtorContext';

function RealtorContainer() {
    const [searchTermName, setSearchTermName] = useState('');
    const [searchTermLocation, setSearchTermLocation] = useState('');
    const {realtors, find_result} = useContext(Context)
    // const realtors = "unknown";

    const conditionalRealtor = !realtors ? 
    <>
    <AgentLayout.FirstSection>
    <p><strong>Find agents in your area.</strong></p>
    <p></p>
    <p>To get started, enter your location or search for a specific agent by name.</p>
    <img src="https://www.zillowstatic.com/static-leaderboards/LATEST/static-leaderboards/images/no-results-lg.jpg"></img>
    </AgentLayout.FirstSection> </>: <p>{realtors.specialty}</p>; {/*<RealtorCard />; */}
    return (
        <>
        <div className="HomeList-grid-container" style={{width: "80%", marginLeft: "auto", marginRight: "auto"}}>
            <div>
                <Row>
                    <Col className="w-25">
                        <Row>
                            <p>Location</p>
                        </Row>
                        <Row>
                            <InputGroup className="mb-3" >
                            <FormControl
                                placeholder="Neighborhood/City/Zip"
                                aria-label="Search for agent location"
                                aria-describedby="basic-addon2"
                                className="smaller-input"
                                value={searchTermName}
                                />
                                <InputGroup.Append>
                                <Button variant="outline-secondary"  onClick = {()=>find_result(searchTermName)}><AiOutlineSearch /></Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Row>
                    </Col>
                    <Col className="w-25">
                        <Row>
                            <p>Name</p>
                        </Row>
                        <Row>
                            <InputGroup className="mb-3" >
                            <FormControl
                                placeholder="Agent name"
                                aria-label="Search for agent name"
                                aria-describedby="basic-addon2"
                                className="smaller-input"
                                />
                                <InputGroup.Append>
                                <Button variant="outline-secondary"><AiOutlineSearch /></Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Row>
                    </Col>
                </Row>
            </div>
            {conditionalRealtor}
        </div>
        <Footer/>
    </>
    )
}
export default RealtorContainer