import React, {useState, createContext, Component } from 'react';
import Client from './Contentful';



const HouseContext = React.createContext()
class HouseProvider extends Component {
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

    formatData(items){
        let tempItems = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            let house = {...item.fields, images, id}; //images : images overwrite
            return house;
        });
        return tempItems;
    }

    getHouse = (id) => {
        let tempHouses = [...this.state.houses];
        const house = tempHouses.find(house => house.id === id);
        return house;
    }

    render() {
        return (
            <HouseContext.Provider  value={{
                ...this.state, 
                getHouse: this.getHouse, 
                handleChange: this.handleChange
                }}>
                {this.props.children}
            </HouseContext.Provider>
        )
    }
}
const HousesConsumer = HouseContext.Consumer;

export function withHousesConsumer(Component){
    return function ConsumerWrapper(props){
        return (
        <HousesConsumer>
            {value => <Component {...props} context={value}/> }
        </HousesConsumer>
        );
    };
}

export{HouseProvider, HousesConsumer, HouseContext}