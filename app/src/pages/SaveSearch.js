import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ProfileNav from '../components/ProfileNav'
export class SaveSearch extends Component {
    static propTypes = {

    }

    render() {
        return (
            <>
            <ProfileNav/>
            <div>
                This is Save Search page!
            </div>
            </>
        )
    }
}

export default SaveSearch
