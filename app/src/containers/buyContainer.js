import React,{useState,useContext} from 'react';
import { BuyLayout } from '../components/export';
import Housecards from './housecards'
import { Context } from '../context/housesContext';
import Map from './googlemap'
function Buy() {
    const [searchTerm, setSearchTerm] = useState('');
    const {find_result} = useContext(Context)
    return (
        <BuyLayout>
            
            <BuyLayout.FirstSection>
                <BuyLayout.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} find_result = {find_result} />
                <BuyLayout.ButtonSection />
                {/* <BuyLayout.Group>
                    <BuyLayout.Dropdown>
                            <BuyLayout.Group>
                                <BuyLayout.TextLink to ='#'>For Sell</BuyLayout.TextLink>
                            </BuyLayout.Group>
                            <BuyLayout.Group>
                                <BuyLayout.TextLink to ='#'>For Buy</BuyLayout.TextLink>
                            </BuyLayout.Group>
                            <BuyLayout.Group>
                                <BuyLayout.TextLink to ='#'>Sold</BuyLayout.TextLink>
                            </BuyLayout.Group>
                    </BuyLayout.Dropdown>
                </BuyLayout.Group> */}
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