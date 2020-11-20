import React from 'react'
import loadingGif from '../img/gif/loading-arrow.gif';

export default function loading() {
    return (
        <div>
            <h4 style={{color:"blue"}}>houses data loading...</h4>
            <img src={loadingGif} alt="" />
        </div>
    )
}
