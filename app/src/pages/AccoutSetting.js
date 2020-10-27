import React, { Component } from 'react'
import ProfileNav from '../components/ProfileNav'
import { ListGroup } from 'react-bootstrap'

export class AccoutSetting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            name: "",
            screenName: "",
            email: "",
            password: ""
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.reset = this.reset.bind(this);
    }

    reset() {
        this.setState(state => ({
        isToggleOn: !state.isToggleOn,
        name: "",
        screenName: "",
        email: "",
        password: ""
        }));
    }

    handleClick() {
        this.setState(state => ({
        isToggleOn: !state.isToggleOn,
        name: "Renee",
        screenName: "reneechen",
        email: "reneechen108@gmail.com",
        password: "123456"
        }));
    }

    render() {
        return (
            <>
            <ProfileNav/>
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
            <button onClick={this.reset}>
                Reset
            </button>
            <ListGroup>
                <ListGroup.Item>Name: {this.state.name}</ListGroup.Item>
                <ListGroup.Item>Screen Name: {this.state.screenName}</ListGroup.Item>
                <ListGroup.Item>Email: {this.state.email}</ListGroup.Item>
                <ListGroup.Item>Password: {this.state.password}</ListGroup.Item>
            </ListGroup>
            </>
        )
    }
}

export default AccoutSetting
