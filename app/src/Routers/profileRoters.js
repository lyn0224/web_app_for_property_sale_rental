import React from "react"
import {Route,Switch} from "react-router-dom"
import SaveHome from "../pages/profile/SaveHome"
import SaveSearch from "../pages/profile/SaveSearch"
import AccoutSetting from "../pages/profile/AccoutSetting"
import Application from "../pages/profile/Application"
import * as ROUTES from '../constants/routes'
function ProfileRouters(){
    return(
        <Switch>
              <Route path = {ROUTES.SAVED_HOME}><SaveHome/></Route>
              <Route path = {ROUTES.SAVED_SEARCH}><SaveSearch/></Route>
              <Route path = {ROUTES.ACCOUNT_SETTING}><AccoutSetting/></Route>
              <Route path = {ROUTES.APPLICATION}><Application/></Route>
        </Switch>
    )
}

export default ProfileRouters