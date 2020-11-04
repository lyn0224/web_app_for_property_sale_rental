import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class AccountNav extends Component {
    render() {
        return (
            <div className="AccountNav">
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/sign_up">New Account</Link>
                </li>
            </div>       
        )
    }
}
export default AccountNav;