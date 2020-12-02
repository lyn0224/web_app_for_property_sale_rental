import React,{useState,useContext} from 'react';
import { BuyLayout } from '../components/export';
import Housecards from './housecards'
import { Context } from '../context/housesContext';
import Map from './googlemap'
import FilterBar from './FilterBar'
function Buy() {

    // const conditionalFilterBar = houses ? 
    //     <FilterBar search_type = "b"/> : null;
    return (
        <BuyLayout>
            
            {/* <BuyLayout.FirstSection>
                
            </BuyLayout.FirstSection>
            */}
            <BuyLayout.SecondSection>
                <FilterBar search_type = "b"/>
                <BuyLayout.List>
                    <Housecards/>
                </BuyLayout.List>

            </BuyLayout.SecondSection>
            
        </BuyLayout>
    )
}

export default Buy