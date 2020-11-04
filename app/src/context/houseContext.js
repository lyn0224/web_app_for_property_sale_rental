import React, {useState, createContext, Component } from 'react';
import Client from './Contentful';

Client.getEntries({
    content_type: "beachResortRoom"
}).then(response => console.log(response.items));

const Context = React.createContext()
class HouseContext extends Component {
    state={
        houses:[],
        sortedRooms: [],
        featuredHouses: [],
        loading: true,
        type: 'all',
        bedNum: 0,
        bathNum: 0,
        address: '',
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0
    };

    getData = async() => {
        try{
            let response = await Client.getEntries({
                content_type: "beachResortRoom",
                // order: 'sys.createdAt'
                order: "fields.price" // -fields.price
            });
            let houses = this.formatData(response.items);
            let featuredHouses = houses.filter(house => house.featured === true);
            let maxPrice = Math.max(...houses.map(item => item.price));
            let maxSize = Math.max(...houses.map(item => item.size));
            this.setState({
                houses, 
                featuredHouses, 
                sortedRooms: houses, 
                loading: false,
                price: maxPrice,
                maxPrice: maxPrice,
                maxSize: maxSize
            });
        }catch(error){
            console.log(error);
        }
    }
    componentDidMount(){
        this.getData();
    }
    render() {
        return (
            <Context.Provider>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export {HouseContext, Context};