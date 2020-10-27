import React from "react"
import {Route,Switch} from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import SaveHome from "../pages/profile/SaveHome"
import SaveSearch from "../pages/profile/SaveSearch"
import AccoutSetting from "../pages/profile/AccoutSetting"
import Profile from "../pages/profile/Profile"
import Buy from "../pages/Buy"
import Sell from "../pages/Sell"
import Rent from "../pages/Rent"

function Routers(){
    return(
        <Switch>
              <Route exact path = "/"><Home/></Route>
              <Route path = "/buy"><Buy /></Route>
              <Route path = "/rent"><Rent /></Route>
              <Route path = "/sell"><Sell /></Route>
              <Route path = "/home_loans"></Route>
              <Route path = "/agent_finder"></Route>
              <Route path = "/manage_rentals"></Route>
              <Route path = "/advertise"></Route>
              <Route path = "/help"></Route>
              <Route path = "/login"><Login/></Route>
              <Route path = "/sign_up"><Signup/></Route>
              <Route path = "/logout"></Route>
              <Route path = "/profile"><Profile/></Route>
          </Switch>
    )
}

export default Routers