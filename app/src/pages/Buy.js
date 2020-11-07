import React, { Component } from 'react'
import Housecards from '../containers/housecards'
import Map from '../containers/googlemap'


export class Buy extends Component {

    render() {
        return (
            <div className = "Pagelayout">
                <div className = "MapContainer">
                    <Map/>
                </div>

                <div className = "HouseContainer">
                    <Housecards/>
                </div>
   
            </div>
        )
    }
}

export default Buy
