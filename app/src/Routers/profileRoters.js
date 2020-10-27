import React from "react"
import {Route,Switch} from "react-router-dom"
import SaveHome from "../pages/profile/SaveHome"
import SaveSearch from "../pages/profile/SaveSearch"
import AccoutSetting from "../pages/profile/AccoutSetting"
function ProfileRouters(){
    return(
        <Switch>
              <Route path = "/profile/save_home"><SaveHome/></Route>
              <Route path = "/profile/save_search"><SaveSearch/></Route>
              <Route path = "/profile/account_setting"><AccoutSetting/></Route>
          </Switch>
    )
}

export default ProfileRouters