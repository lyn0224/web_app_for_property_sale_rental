import React from 'react'
import ProfileNav from '../../components/ProfileNav'
import {Switch, Route} from 'react-router-dom'
import ProfileRouters from '../../Routers/profileRoters'
function Profile(){
    return(
    <>
        <ProfileNav/>
        <ProfileRouters/>
    </>
    )
}

export default Profile