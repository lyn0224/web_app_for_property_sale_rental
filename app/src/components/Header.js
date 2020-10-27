import React from "react"
import {Link} from "react-router-dom"
import UserStore from '../stores/UserStore';
import DropdownMulti from '../components/DropdownMulti';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from 'react-bootstrap'

function Header(){
    const items = [
        {
          id: 1,
          value: 'Saved Home',
        },
        {
          id: 2,
          value: 'Save Search',
        },
        {
          id: 3,
          value: 'Account Setting',
        },
    ];

    return(
        <header className ="Header">
            <div className = "left-link-panel">
                <Link to="/buy" className = "header-link header-link-text">Buy</Link>
                <Link to="/rent" className = "header-link header-link-text">Rent</Link>
                <Link to="/sell" className = "header-link header-link-text">Sell</Link>
                <Link to="/home_loans" className = "header-link header-link-text">Home Loans</Link>
                <Link to="/agent_finder" className = "header-link header-link-text">Agent finder</Link>
            </div>

            <Link to= "/" className = "header-link" ><h1 className = "logo-text">Zillow</h1></Link>

            <div className = "right-link-panel">
                <Link to="/manage_rentals" className = "header-link header-link-text">Manage Rantals</Link>
                <Link to="/advertise" className = "header-link header-link-text">Advertise</Link>
                <Link to="/help" className = "header-link header-link-text">Help</Link>
                {/* {UserStore.loggedIn ?
                    <React.Fragment>
                        <Link to="/profile" className = "header-link header-link-text">Profile</Link>
                        <Link to="/logout" className = "header-link header-link-text">Logout</Link>
                    </React.Fragment>
                    :
                    <Link to="/login" className = "header-link header-link-text">Sign in</Link>
                }                 
                */}
                <Link to="/profile" className = "header-link header-link-text">Profile</Link>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/save_home">Save Home</Dropdown.Item>
                        <Dropdown.Item href="/save_search">Save Search</Dropdown.Item>
                        <Dropdown.Item href="/account_setting">Account Setting</Dropdown.Item>
                        <Dropdown.Item href="/logout">Sign out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <DropdownMulti title="Profile" items={items}/>
                <Link to="/login" className = "header-link header-link-text">Sign in</Link>
            </div>
        </header>
    )
}

export default Header