import React from 'react';
import { useContext } from 'react';
import { Context } from '../context/housesContext';

//get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};

export default function FilterBar({ houses }) {
    const context = useContext(Context);
    // console.log(context);
    const {
        handleChange,
        type,
        bed,
        bath,
        minPrice,
        maxPrice,
        flooring,
        minSize,
        maxSize,
        parking,
        year
    } = context;

    let types = [];
    let beds = [];
    let baths = [];
    let prices = [];
    let floorings = [];
    let years = []
    // //get unique types
    if(houses){
        types = getUnique(houses, 'property_type');
        types = ['all', ...types];
        types = types.map((item, index) => {
            return <option value={item} key={index}>{item}</option>
        });
        
        beds = getUnique(houses, 'bedroom');
        beds = ['any', ...beds];
        beds = beds.map((item, index) => {
            return <option value={item} key={index}>{item}+</option>
        });

        baths = getUnique(houses, 'bathroom');
        baths = ['any', ...baths];
        baths = baths.map((item, index) => {
            return <option value={item} key={index}>{item}+</option>
        });

        prices = [500000,1000000,1500000,2000000,2500000,3000000,3500000]
        prices = prices.map((item, index) => {
            return <option value={item} key={index+1}>{item}</option>
        });

        floorings = getUnique(houses, "flooring");
        floorings = ['any', ...floorings];
        floorings = floorings.map((item, index) => {
            return <option value={item} key={index+1}>{item}</option>
        });

        years = getUnique(houses, 'year_built');
        years = ['all', ...years];
        years = years.map((item, index) => {
            return <option value={item} key={index}>{item}</option>
        });
    }

    

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
                
                {/*bed*/}
                <div className="form-group">
                    <label htmlFor="bed">Bed</label>
                    <select
                        name="bed"
                        id="bed"
                        value={bed}
                        className="form-control"
                        onChange={handleChange}>
                        {beds}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="bath">Bath</label>
                    <select
                        name="bath"
                        id="bath"
                        value={bed}
                        className="form-control"
                        onChange={handleChange}>
                        {baths}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="year">Year Built</label>
                    <select
                        name="year"
                        id="year"
                        value={year}
                        className="form-control"
                        onChange={handleChange}>
                        {years}
                    </select>
                </div>

                {/*minPrice*/}
                <div className="form-group">
                    <label htmlFor="minPrice">Min Price</label>
                    <select
                        name="minPrice"
                        id="minPrice"
                        value={minPrice}
                        className="form-control"
                        onChange={handleChange}>
                        <option value={0} key={0}>0</option>
                        {prices}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="maxPrice">Max Price</label>
                    <select
                        name="maxPrice"
                        id="maxPrice"
                        value={maxPrice}
                        className="form-control"
                        onChange={handleChange}>
                        <option value={10000000} key={0}>10000000</option>
                        {prices}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="flooring">Flooring</label>
                    <select 
                        name="flooring"
                        id="flooring"
                        value={flooring}
                        className="form-control"
                        onChange={handleChange}
                    >{floorings}</select>
                </div>

                <div className="form-group">
                    <label htmlFor="size">
                        house size
                    </label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" min={minSize} id="size" value={minSize} onChange={handleChange} className="size-input" />
                        <input type="number" name="maxSize" min={maxSize} id="size" value={maxSize} onChange={handleChange} className="size-input" />
                    </div>
                </div>

                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="parking" id="parking" checked={parking} onChange={handleChange} />
                        <label htmlFor="parking">Parking</label>
                    </div>
                </div>
            </form>
        </section>
    )
}