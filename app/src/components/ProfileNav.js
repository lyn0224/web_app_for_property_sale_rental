import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ProfileNav extends Component {
    render() {
        return (
            <div className="AccountNav">
                <li>
                    <Link to="/profile/listing">Listing</Link>
                </li>
                <li>
                    <Link to="/profile/save_home">Save Home</Link>
                </li>
                <li>
                    <Link to="/profile/save_search">Save Search</Link>
                </li>
                <li>
                    <Link to="/profile/account_setting">Account Setting</Link>
                </li>
            </div>       
        )
    }
}
export default ProfileNav;