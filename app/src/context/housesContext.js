import React, {useState, createContext, Component } from 'react';
import Client from './Contentful';

const Context = React.createContext()
class HousesProvider extends Component {
    
    state={
        houses: []
        // sortedHouses: [],
        // featuredHouses: [],
        // loading: true,
        // type: 'all',
        // bedNum: 0,
        // bathNum: 0,
        // address: '',
        // price: 0,
        // minPrice: 0,
        // maxPrice: 0,
        // minSize: 0,
        // maxSize: 0,
        // parking: 0,

    };

    getData = async() => {
        try{
            let response = await fetch('http://localhost:9000/house', {
                method: 'get',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            let result = await response.json();
            let houses = this.formatData(result.dataset);
            this.setState({
                houses: houses
            });
            console.log(this.state.houses);
        }catch(error){
            console.log(error);
        }
    }

    componentDidMount(){
        this.getData();
    }

    formatData(items){
        console.log("formatData");
        let tempItems = items.map(item => {
            console.log(item);
            let id = item.S_ID;
            console.log(id);
            // let images = item.fields.images.map(image => image.fields.file.url);
            let house = {...item, id}; //images : images overwrite
            console.log(house);
            return house;
        });
        return tempItems;
    }

    getHouse = (id) => {
        console.log("get houses");
        let tempHouses = [...this.state.houses];
        const house = tempHouses.find(house => house.S_ID === id);
        console.log("inside", house);
        return house;
    }

    handleChange = event => {
        console.log("handleChange");
    }

    filterHouses = () => {
        console.log("filterHouses");
    }


    render() {
        return (
            <>
            {/* <div>this.getHouse</div> */}
            <Context.Provider  value={{
                ...this.state,
                getHouse: this.getHouse, 
                handleChange: this.handleChange
                }}>
                {this.props.children}
            </Context.Provider>
            </>
        )
    }
}



export{HousesProvider, Context}