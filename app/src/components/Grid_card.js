import React,{ Component } from "react"
import Button from "./Button"
class Grid_card extends Component{
    constructor(props){
        super(props);
    }
    onClickButton(){
        console.log("clicked");
    }

    render(){
        return(
            <div className = "Homepage-grid-card">
                <img src = {require("../img/homeicon.png")} alt = "description" className ="grid-image"/>
                <h3 className ="grid-title">{this.props.name}</h3>
                <p className ="grid-description">{this.props.description}</p>
                <Button onClick={ () => this.onClickButton()} title = "Read more"/>
            </div>
        )
    }
}

export default Grid_card