import React, { useContext, useReducer } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Context} from '../context/userInfo'
import { Header } from "../components/export";
import *as ROUTES from '../constants/routes'
// import { FirebaseContext } from '../context/firebase';


function HeaderContainer(props){
    // const { firebase } = useContext(FirebaseContext);
    // const conditionalSignin = loggedIn ? <UserDropdown user = {name} className = "header-link header-link-text"/> :<Link to="/login" className = "header-link header-link-text">Sign in</Link>


    // const conditionalSignin = props.user === null ? (<Header.Link to = {ROUTES.SIGN_IN}>Sign in</Header.Link>):
    //         (<Header.Group>
    //         <Header.Profile>
    //             <Header.Link to ={"#"}>{ props.user.displayName}</Header.Link>

    //             <Header.Dropdown>
    //                 <Header.Group>
    //                     <Header.TextLink to ={"#"} >{ props.user.displayName}</Header.TextLink>

    //                 </Header.Group>
    //                 <Header.Group>
    //                     <Header.TextLink onClick={() => firebase.auth().signOut()}>
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
                    {/* {conditionalSignin} */}
                    <Header.Link to = {ROUTES.SIGN_IN}>Sign in</Header.Link>
                </Header.RightPanel>
            </Header.Frame>
        </Header>
    )
}

export default HeaderContainer