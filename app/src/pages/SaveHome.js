import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Grid from "../components/Grid_card"
import ProfileNav from '../components/ProfileNav'

export class SaveHome extends Component {
    static propTypes = {

    }

    render() {
        return (
            <>
            <ProfileNav/>
            <div className="Home-grid-container">
            
                <Grid/>
                <Grid/>
                <Grid/>

            </div>
            </>
        )
    }
}

export default SaveHome
