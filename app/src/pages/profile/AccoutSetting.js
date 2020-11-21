import React, {useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import {Context} from "../../context/userInfo"

function AccountSetting(){
    const user = JSON.parse(localStorage.getItem('authUser'))
    console.log(user)
    return (
       
        <ListGroup>
            <ListGroup.Item>Name: {user.username}</ListGroup.Item>
            <ListGroup.Item>Email: {user.email}</ListGroup.Item>
            <ListGroup.Item>Role: {user.role}</ListGroup.Item>
        </ListGroup>
    )
}


export default AccountSetting
