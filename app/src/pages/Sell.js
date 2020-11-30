import React, { Component } from 'react'
import {Card, Badge, Button, Row, Col} from 'react-bootstrap'
import img12 from "../img/homeicon.png";
import { Link } from 'react-router-dom';
import *as ROUTES from '../constants/routes'
import SellLayout from '../components/sell/sell'
import DefaultImg from '../img/homeicon.png'
import Footer from "../containers/footer"
export class Sell extends Component {

    render() {
        return (
            <>
            <Row>
                <SellLayout.Notice>
                    <img src={DefaultImg} alt="Paris"/>
                    <p><strong>Our commitment to safety</strong></p>
                    <p>Whether we're making an offer on your home or connecting you with an agent, we're committed to prioritizing the safety of our customers, communities and employees.</p>
                </SellLayout.Notice>
            </Row>    
            <div style={{addingBottom: "5px"}}>
                <h1 style={{textAlign: "center"}}>
                    Sell with confidence <Badge variant="secondary">SELL</Badge>
                </h1>
                <h5 style={{textAlign: "center"}}>
                    Zillow is making it simpler and safer to sell your home and move forward.
                </h5>
            </div>
            <div style={{width: "90%", margin: "auto", paddingTop: "5px"}}>
            <Row>
                <Col xs={8}>
                    <Card>
                        <Card.Header>Agent</Card.Header>
                        <Card.Body>
                            <Card.Title>Work with an agent</Card.Title>
                            <Card.Text>
                            Zillow Premier Agents are among the best in the business. Learn how to pick the right one for you.</Card.Text>
                            <Button variant="outline-primary"><Link to="/agentfinder">Search now</Link></Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                    <Card.Header>Sell</Card.Header>
                    <Card.Body>
                        <Card.Title>Sell it yourself</Card.Title>
                        <Card.Text>
                        Reach the largest audience of shoppers with a free Zillow listing. Start by learning how to "sell for sale by owner."
                        </Card.Text>
                        <Button variant="outline-primary"><Link to={ROUTES.SELL_OWNER}>Create a listing</Link></Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            </div>   
            <Footer/> 
            </>
        )
    }
}

export default Sell
