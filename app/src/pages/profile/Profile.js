import React from 'react'
import ProfileNav from '../../components/ProfileNav'
import ProfileRouters from '../../Routers/profileRoters'
import {HomeContextProvider} from "../../context/SaveHomeContext"
function Profile(){
    return(
    <>
        <ProfileNav/>
        <HomeContextProvider>
        <ProfileRouters/> 
        </HomeContextProvider>
    </>
    )
}

export default Profile