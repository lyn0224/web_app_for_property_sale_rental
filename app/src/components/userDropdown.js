import React from 'react'
import { Dropdown } from 'react-bootstrap'
import DropdownMulti from './DropdownMulti'
import {Link} from "react-router-dom"
function UserDropdown(props){
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
        <>
            <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                       <Link to ='/profile'> {props.user}</Link>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/save_home">Save Home</Dropdown.Item>
                        <Dropdown.Item href="/save_search">Save Search</Dropdown.Item>
                        <Dropdown.Item href="/account_setting">Account Setting</Dropdown.Item>
                        <Dropdown.Item href="/logout">Sign out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            {/* <DropdownMulti title="Profile" items={items}/>  */}
        </>
    )
}

export default UserDropdown