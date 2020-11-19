import React, {useState, createContext, Component, useEffect } from 'react';

const Context = React.createContext()
function HousesProvider({children}) {
    const [houses,setHouses] = useState()
    const [search,setSearch] = useState()
    const URL = 'http://localhost:9000/house';

    useEffect( ()=>{
        fetch(URL).then(response=>response.json()).then(result=>setHouses(result.dataset))
    },[])
    function find_result(input){
        console.log(input)
        if(!input){
            setSearch(houses)
        }else{
            const array = houses.filter(house=>house.Owner_ID == input || house.city ==input)
            setSearch(array)
        }
        
    }
    console.log(search)
        return (
            <>
            {/* <div>this.getHouse</div> */}
            <Context.Provider  value={{
                houses,find_result,search,setSearch
                }}>
                {children}
            </Context.Provider>
            </>
        )
}



export{HousesProvider, Context}