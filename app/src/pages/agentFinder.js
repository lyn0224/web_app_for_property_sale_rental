import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl, Container, Row, Col, Card} from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';
import homeicon from "../img/homeicon.png";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import searchField from '../components/searchField'
import Footer from "../containers/footer"
import AgentLayout from '../components/agentFinder/agentLayout'

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class AgentFinder extends Component {
  render() {
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
                                />
                                <InputGroup.Append>
                                <Button variant="outline-secondary"><AiOutlineSearch /></Button>
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
            <AgentLayout.FirstSection>
                <p1><strong>Find agents in your area.</strong></p1>
                <p></p>
                <p2>To get started, enter your location or search for a specific agent by name.</p2>
                <img src="https://www.zillowstatic.com/static-leaderboards/LATEST/static-leaderboards/images/no-results-lg.jpg"></img>
            </AgentLayout.FirstSection>
        </div>
            {/* <div>
                <Row>
                    <Col>
                        <Map google={this.props.google} zoom={14} style={mapStyles}>
                            <Marker onClick={this.onMarkerClick}
                                    name={'Current location'} />

                            <InfoWindow onClose={this.onInfoWindowClose}>
                    
                            </InfoWindow>
                        </Map>
                    </Col>
                    <Col>
                        <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src={homeicon} style={{height: "100px", width: "100px"}}/>
                            <Card.Body>
                                <Card.Title>$25,000,000</Card.Title>
                                <p>4 bd | 6.5 ba| 10,725 Square Feet</p>
                                <Card.Text>
                                190 Sea Cliff Ave, San Francisco, CA 94121
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>        
        </div> */}
        <Footer/>
        </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAqIaWLvlgmCmVVsE0aSXFuU2XZ-N0YXbI'
})(AgentFinder);