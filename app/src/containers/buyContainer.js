import React,{useState} from 'react';
import { BuyLayout } from '../components/export';
import Housecards from './housecards'
import Map from './googlemap'
function Buy() {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <BuyLayout>
            
            <BuyLayout.FirstSection>
                <BuyLayout.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} >
                    </BuyLayout.Search>
            </BuyLayout.FirstSection> 

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