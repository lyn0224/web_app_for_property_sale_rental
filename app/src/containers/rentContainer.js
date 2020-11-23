import React,{useState,useContext} from 'react';
import { BuyLayout } from '../components/export';
import RentHousecards from './rentHousecard'
import { RentContext } from '../context/rentContext';
import Map from './googlemap'
import RentFilterBar from './rentFilterBar'
function RentContainer() {
    
    const [searchTerm, setSearchTerm] = useState('');
    const {houses, find_result} = useContext(RentContext)
    console.log("this is rent",houses)
    const conditionalFilterBar = houses ? 
        <RentFilterBar/> : null;

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
                    <RentHousecards/>
                </BuyLayout.List>

            </BuyLayout.SecondSection>
            
        </BuyLayout>
    )
}

export default RentContainer