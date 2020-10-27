import React from 'react'
import loadingGif from '../img/gif/loading-arrow.gif';

export default function loading() {
    return (
        <div className="loading">
            <h4>houses data loading...</h4>
            <img src={loadingGif} alt="" />
        </div>
    )
}
