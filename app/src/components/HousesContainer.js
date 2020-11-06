import React from 'react'
import { withHousesConsumer } from '../context/houseContext';
import Loading from './loading';
import Grid from '../components/Grid_card'

function HousesContainer({context}){
    const {houses} = context;
    console.log(houses);
    return (
        <div>
            <ul className="dd-list">
                {houses.map(house => (
                    <Grid name={house.name} description={house.slug} key={house.id} id={house.id} img={house.images[0]} price={house.price}/>
                ))}
            </ul>
        </div>
    );
}

export default withHousesConsumer(HousesContainer);