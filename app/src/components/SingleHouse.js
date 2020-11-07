import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { HouseContext } from '../context/houseContext';
import defaultBcg from '../img/homeicon.png'

export default class SingleHouse extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
        this.state={
            id: this.props.match.params.id,
            defaultBcg
        };
    }
    // componentDidMount(){}
    
    static contextType = HouseContext;

    render() {
        const {getHouse} = this.context;
        const house = getHouse(this.state.id);
        console.log(house);
        if(!house){
            return <div className="error">
                <h3>no such house could be found...</h3>
                <Link to="/houses" className="btn-primary">
                    back to houses
                </Link>
            </div>
        }
        const {
            name, 
            description, 
            capacity, 
            size, 
            price, 
            extras, 
            breakfast, 
            pets, 
            images
        } = house;
        const [mainImg,...defaultImg] = images;
        // console.log(defaultImg);

        return (
            <>
            <article className="info">
                <h3>info</h3>
                <h6>price : ${price}</h6>
                <h6>size : {size} SQFT</h6>
                <h6>max capacity : {
                    capacity > 1 ? `${capacity} people` : `${capacity} person`}
                </h6>
                <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                <h6>{breakfast && "free breakfast included"}</h6>
            </article>
           
            </>
        )
    }
}
