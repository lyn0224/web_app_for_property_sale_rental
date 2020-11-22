import React,{useState,useContext} from 'react';
import { BuyLayout } from '../components/export';
import Housecards from './housecards'
import { Context } from '../context/housesContext';
import Map from './googlemap'
import FilterBar from './FilterBar'
function Buy() {
    const [searchTerm, setSearchTerm] = useState('');
    const {houses,handleSubmit, find_result} = useContext(Context)

    const conditionalFilterBar = houses ? 
        <FilterBar/> : null;

    return (
        <BuyLayout>
            
            <BuyLayout.FirstSection>
                <BuyLayout.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} find_result = {find_result} />
            </BuyLayout.FirstSection>
            {conditionalFilterBar}
            <BuyLayout.SecondSection>

                <BuyLayout.Map>
                    <Map/>
                </BuyLayout.Map>

                <BuyLayout.List>
                
                    <Housecards/>
                </BuyLayout.List>

            </BuyLayout.SecondSection>
            
        </BuyLayout>
    )
}

export default Buy