import React, { useContext } from "react"
import {Link} from "react-router-dom"
import UserStore from '../stores/UserStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDropdown from './userDropdown'
import {Context} from '../context/LoginContext'
function Header(prop){
    const {username} = useContext(Context)
    console.log(username);
    const conditionalSignin = UserStore.isLoggedIn ? <UserDropdown user = {username} className = "header-link header-link-text"/> :<Link to="/login" className = "header-link header-link-text">Sign in</Link>
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
                
                {conditionalSignin}

                
            </div>
        </header>
    )
}

export default Header