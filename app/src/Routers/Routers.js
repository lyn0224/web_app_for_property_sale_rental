import React from "react"
import {Route,Switch} from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Signup from "../pages/Signup"
import Profile from "../pages/Profile"
function Routers(){
    return(
        <Switch>
              <Route exact path = "/"><Home/></Route>
              <Route path = "/buy"></Route>
              <Route path = "/rent"></Route>
              <Route path = "/sell"></Route>
              <Route path = "/home_loans"></Route>
              <Route path = "/agent_finder"></Route>
              <Route path = "/manage_rentals"></Route>
              <Route path = "/advertise"></Route>
              <Route path = "/help"></Route>
              <Route path = "/login"><Login/></Route>
              <Route path = "/sign_up"><Signup/></Route>
              <Route path = "/profile"><Profile/></Route>
          </Switch>
    )
}

export default Routers