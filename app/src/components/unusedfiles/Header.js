import React, { useContext } from "react"
import {Link} from "react-router-dom"
import UserStore from '../../stores/UserStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDropdown from '../userDropdown'
import {Context} from '../../context/userInfo'
function Header(prop){
    const {name,loggedIn} = useContext(Context)
    console.log(loggedIn);
    const conditionalSignin = loggedIn ? <UserDropdown user = {name} className = "header-link header-link-text"/> :<Link to="/login" className = "header-link header-link-text">Sign in</Link>
    
    return(
        <header className ="Header">
            <div className = "left-link-panel">
                <Link to="/buy" className = "header-link header-link-text">Buy</Link>
                <Link to="/rent" className = "header-link header-link-text">Rent</Link>
                <Link to="/sell" className = "header-link header-link-text">Sell</Link>
                <Link to="/agent_finder" className = "header-link header-link-text">Agent finder</Link>
            </div>

            <Link to= "/" className = "header-link" ><h1 className = "logo-text">Zillow</h1></Link>

            <div className = "right-link-panel">
                <Link to="/help" className = "header-link header-link-text">Help</Link>
                
                {conditionalSignin}

                
            </div>
        </header>
    )
}

export default Header