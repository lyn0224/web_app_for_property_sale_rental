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
        const condictionalPrice = this.props.price ? <p className ="grid-price">${this.props.price}</p> : null;
        const condictionalLink = this.props.price ? 
        <Link to={`/houses/${this.props.id}`}>
            Read more
        </Link> :
        // <Link to={`${this.props.id}`}>
        //     {this.props.id}
        // </Link> 
        <a href={`${this.props.id}`}>
            {this.props.id}
        </a>
        return(
            <div className = "Homepage-grid-card">
                <img src = {this.props.img} alt = "description" className ="grid-image"height="200" width="350"/>
                <h3 className ="grid-title">{this.props.name}</h3>
                <p className ="grid-description">{this.props.description}</p>
                {condictionalPrice}
                {/* <Button onClick={ () => this.onClickButton()} title = "Read more"/> */}
                {condictionalLink}
            </div>
        )
    }
}

export default Grid_card