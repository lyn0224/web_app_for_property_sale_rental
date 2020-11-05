import React,{ Component } from "react"
import Button from "./Button"
import { Link } from 'react-router-dom';
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
                <img src = {this.props.img} alt = "description" className ="grid-image"height="200" width="350"/>
                <h3 className ="grid-title">{this.props.name}</h3>
                <p className ="grid-description">{this.props.description}</p>
                <p className ="grid-price">${this.props.price}</p>
                {/* <Button onClick={ () => this.onClickButton()} title = "Read more"/> */}
                <Link to={`/houses/${this.props.id}`}>
                    Read more
                </Link>
            </div>
        )
    }
}

export default Grid_card