import React, { useContext, useReducer } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Context} from '../context/userInfo'
import { Header } from "../components/export";
import *as ROUTES from '../constants/routes'



function HeaderContainer(props){

    const {user,logout} = useContext(Context);
    const conditionalRentals = (user === null || user.role ==="A" )? null: (<Header.Link to = {ROUTES.RENTALS}>Manage Rentals</Header.Link>);
    const conditionalSignin = user === null ? (<Header.Link to = {ROUTES.SIGN_IN}>Sign in</Header.Link>):
            (<Header.Group>
            <Header.Profile>
            <Header.Link to ='#'>{user.username}</Header.Link>

                <Header.Dropdown>

                        <Header.Group>
                            <Header.TextLink to ={ROUTES.SAVED_HOME}>Saved Home</Header.TextLink>
                        </Header.Group>
                        <Header.Group>
                            <Header.TextLink to ={ROUTES.SAVED_SEARCH}>Saved Search</Header.TextLink>
                        </Header.Group>
                        <Header.Group>
                            <Header.TextLink to ={ROUTES.LISTING}>Listing</Header.TextLink>
                        </Header.Group>
                        <Header.Group>
                            <Header.TextLink to ={ROUTES.APPLICATION}>Application</Header.TextLink>
                        </Header.Group>
                        <Header.Group>
                            <Header.TextLink to ={ROUTES.ACCOUNT_SETTING}>Account Setting</Header.TextLink>
                        </Header.Group>
                        <Header.Group>
                            <Header.TextLink to ='#' onClick = {()=>logout()}>
                                Sign out
                            </Header.TextLink>
                        </Header.Group>
                </Header.Dropdown>
            </Header.Profile>
        </Header.Group>)
        const conditionalAdmin = (user!==null && user.role =="A") ? <Header.Link to = {ROUTES.HELP}>Admin</Header.Link> : null;
        const conditionallogo = user!==null ? <Header.ConditionLogoText to = {ROUTES.HOME}>Zillow</Header.ConditionLogoText>:<Header.Logo to = {ROUTES.HOME}>Zillow</Header.Logo>
    return(
        <Header>
            <Header.Frame>
                <Header.LeftPanel>
                    <Header.Link to = {ROUTES.BUY}>Buy</Header.Link>
                    <Header.Link to = {ROUTES.RENT}>Rent</Header.Link>
                    <Header.Link to = {ROUTES.SELL}>Sell</Header.Link>
                    <Header.Link to = {ROUTES.AGENT_FINDER}>Agent finder</Header.Link>
                </Header.LeftPanel>
                
                {conditionallogo}

                <Header.RightPanel>
                    {conditionalRentals}
                    {conditionalAdmin}
                    {conditionalSignin}
                </Header.RightPanel>
            </Header.Frame>
        </Header>
    )
}

export default HeaderContainer