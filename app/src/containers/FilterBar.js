import React from 'react';
import { useContext } from 'react';
import { Context } from '../context/housesContext';

//get all unique values
const getUnique = (items, value) => {
    console.log("this is items", items)
    console.log("this is value", value)
    return [...new Set(items.map(item => item[value]))];
};

export default function FilterBar({ houses }) {
    const context = useContext(Context);
    // console.log(context);
    const {
        handleChange,
        type
        // capacity,
        // price,
        // minPrice,
        // maxPrice,
        // minSize,
        // maxSize,
        // breakfast,
        // pets
    } = context;

    // console.log(houses);

    
    let types = [];
    // //get unique types
    if(houses){
        console.log("this is inside houses: ", houses)
        types = getUnique(houses, 'property_type');
        types = ['all', ...types];
        types = types.map((item, index) => {
            // console.log(item)
            return <option value={item} key={index}>{item}</option>
        });
        console.log(types)
    }

    // //map to jsx

    // let people = getUnique(houses, 'capacity');
    // people = people.map((item, index) => {
    //     return <option key={index} value={item}>{item}</option>
    // })

    return (
        <section className="filter-container">
            <form className="filter-form">
                {/*select type */}
                <div className="form-group">
                    <label htmlFor="type">House type</label>
                    <select
                        name="type"
                        id="type"
                        value={type}
                        className="form-control"
                        onChange={handleChange}>
                        {types}
                    </select>
                </div>
                {/*end select type */}
                {/*guest*/}
                {/* <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select
                        name="capacity"
                        id="capacity"
                        value={capacity}
                        className="form-control"
                        onChange={handleChange}>
                        {people}
                    </select>
                </div> */}
                {/*end guest*/}
                {/* house price */}
                /
                {/* end of house price */}
                {/* house size */}
                {/* <div className="form-group">
                    <label htmlFor="size">
                        house size
                    </label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" min={minSize} id="size" value={minSize} onChange={handleChange} className="size-input" />
                        <input type="number" name="maxSize" min={maxSize} id="size" value={maxSize} onChange={handleChange} className="size-input" />
                    </div>
                </div> */}
                {/* end of house size */}
                {/* extras */}
                {/* <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">Garage</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">HOA</label>
                    </div>
                </div> */}
                {/* end of extras */}
            </form>
        </section>
    )
}
