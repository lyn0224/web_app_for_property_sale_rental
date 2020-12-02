import { Context } from '../context/housesContext';
import React,{useState,useContext} from 'react';
import { BuyLayout } from '../components/export';
//get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
};

export default function FilterBar(props) {
    const context = useContext(Context);
    // console.log(context);
    console.log(props.search_type)
    const [searchTerm, setSearchTerm] = useState('');
    // const {} = useContext(Context)
    const {
        handleChange,
        handleSave,
        type,
        bed,
        minPrice,
        maxPrice,
        flooring,
        minSize,
        maxSize,
        parking,
        year,
        houses,
        find_result
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
        
        beds = [1,2,3,4,5]
        beds = ['any', ...beds];
        beds = beds.map((item, index) => {
            return <option value={item} key={index}>{item}+</option>
        });

        baths = [1,2,3,4,5]
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

        years = [1990,1995,2000,2005,2010,2015,2020]
        years = ['all', ...years];
        years = years.map((item, index) => {
            return <option value={item} key={index}>{item}</option>
        });
    }

    return (
        <section className="filter-container">
     
            <BuyLayout.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} find_result = {find_result} placeholder="Search the houses that you want"/>
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
            <button style={{width: "100px", height: "30px", fontSize: "13px", marginLeft: "100px"}} onClick={()=>handleSave(props.search_type)}>Save Search</button>
        </section>
    )
}