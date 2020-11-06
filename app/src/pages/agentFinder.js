import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl, Container, Row, Col, Card} from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';
import img12 from "../img/homeicon.png";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
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
                    <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Search for home"
                        aria-label="Search for home"
                        aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                        <Button variant="outline-secondary"><AiOutlineSearch /></Button>
                        </InputGroup.Append>
                    </InputGroup>
                    </Col>
                    <Col md="auto">
                        <Button className="mb-3" href="#">For Sale</Button>{' '}
                        <Button className="mb-3" href="#">Price</Button>{' '}
                        <Button className="mb-3" href="#">Beds & Baths</Button>{' '}
                        <Button className="mb-3" href="#">Hometype</Button>
                    </Col>
                </Row>
            </div>
            <div>
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
                            <Card.Img variant="top" src={img12} style={{height: "100px", width: "100px"}}/>
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
        </div>
        </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAqIaWLvlgmCmVVsE0aSXFuU2XZ-N0YXbI'
})(AgentFinder);