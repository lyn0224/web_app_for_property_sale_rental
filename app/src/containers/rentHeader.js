import React, { useContext, useReducer } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Context} from '../context/userInfo'
import { Header } from "../components/export";
import *as ROUTES from '../constants/routes'
import {Nav} from 'react-bootstrap'

function RentHeader(){
    return(
        <Nav
            activeKey="/home"
            // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
            <Nav.Item>
                <Nav.Link href={ROUTES.RENT_OWNER}>Post Listing</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Update Listing</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Review Application</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default RentHeader