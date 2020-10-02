import React from "react"
import Button from "./Button"
function Grid_card(props){
    return(
            <div className = "Homepage-grid-card">
                <img src = {require("../img/homeicon.png")} alt = "description" className ="grid-image"/>
                <h3 className ="grid-title">Grid Title</h3>
                <p className ="grid-description">Grid Description</p>
                <Button title = "Read more"/>
            </div>
    )
}

export default Grid_card