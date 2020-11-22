import React from "react"
import {Route,Switch} from "react-router-dom"
import Home from "../pages/Home"
import Signin from "../pages/userauth/signin"
import Signup from "../pages/userauth/signup"
import Profile from "../pages/profile/Profile"
import Buy from "../pages/Buy"
import Sell from "../pages/Sell"
import Rent from "../pages/Rent"
import * as ROUTES from '../constants/routes' 
import Admin from '../pages/Admin'
import AgentFinder from '../pages/agentFinder';
import SellByOwner from '../pages/sellByOwner'
import HouseDetail from '../pages/houseDetail'
import Rentals from '../pages/rentals/Rentals'
function Routers(){
    return(
        <Switch>
          
              <Route exact path = {ROUTES.HOME}><Home/></Route>
              <Route exact path = {ROUTES.BUY}><Buy /></Route>
              <Route exact path={`${ROUTES.BUY}/:id`} ><HouseDetail/></Route>
              <Route path = {ROUTES.RENT}><Rent /></Route>
              <Route path = {ROUTES.SELL}><Sell /></Route>
              <Route path = {ROUTES.AGENT_FINDER}><AgentFinder /></Route>
              <Route path = {ROUTES.HELP}><Admin /></Route>
              <Route path = {ROUTES.SIGN_IN}><Signin/></Route>
              <Route path = {ROUTES.SIGN_UP}><Signup/></Route>
              <Route path = {ROUTES.PROFILE}><Profile/></Route>
              <Route path = {ROUTES.SELL_OWNER}><SellByOwner /></Route>
              <Route path = {ROUTES.RENTALS}><Rentals /></Route>
          </Switch>
    )
}

export default Routers