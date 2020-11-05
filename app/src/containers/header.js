import React, { useContext, useReducer } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Context} from '../context/userInfo'
import { Header } from "../components/export";
import *as ROUTES from '../constants/routes'



function HeaderContainer(props){
    // const conditionalSignin = loggedIn ? <UserDropdown user = {name} className = "header-link header-link-text"/> :<Link to="/login" className = "header-link header-link-text">Sign in</Link>

    const {loggedIn, setLoggedIn} = useContext(Context);
    // const conditionalSignin = props.user === null ? (<Header.Link to = {ROUTES.SIGN_IN}>Sign in</Header.Link>):
    //         (<Header.Group>
    //         <Header.Profile>
    //             <Header.Link to ={"#"}>{ props.user.username}</Header.Link>

    //             <Header.Dropdown>
    //                 <Header.Group>
    //                     <Header.TextLink to ={"#"} >{ props.user.username}</Header.TextLink>

    //                 </Header.Group>
    //                 <Header.Group>
    //                     <Header.TextLink onClick={() => setLoggedIn(!loggedIn)}>
    //                         Sign out
    //                     </Header.TextLink>
    //                 </Header.Group>
    //             </Header.Dropdown>
    //         </Header.Profile>
    //     </Header.Group>)
    return(
        <Header>
            <Header.Frame>
                <Header.LeftPanel>
                    <Header.Link to = {ROUTES.BUY}>Buy</Header.Link>
                    <Header.Link to = {ROUTES.RENT}>Rent</Header.Link>
                    <Header.Link to = {ROUTES.SELL}>Sell</Header.Link>
                    <Header.Link to = {ROUTES.AGENT_FINDER}>Agent finder</Header.Link>
                </Header.LeftPanel>
                
                <Header.Logo to = {ROUTES.HOME}>Zillow</Header.Logo>

                <Header.RightPanel>
                    <Header.Link to = {ROUTES.HELP}>Help</Header.Link>
                    <Header.Link to = {ROUTES.SIGN_IN}>Sign in</Header.Link>
                </Header.RightPanel>
            </Header.Frame>
        </Header>
    )
}

export default HeaderContainer