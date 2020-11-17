import React, {useState, createContext, Component, useEffect } from 'react';

const Context = React.createContext()
function HousesProvider({children}) {
    const [houses,setHouses] = useState()
    const [isLoading,setIsLoading] = useState(true)
    const URL = 'http://localhost:9000/house';

    useEffect( ()=>{
        fetch(URL).then(response=>response.json()).then(result=>setHouses(result.dataset))
    },[])

        return (
            <>
            {/* <div>this.getHouse</div> */}
            <Context.Provider  value={{
                houses,isLoading
                }}>
                {children}
            </Context.Provider>
            </>
        )
}



export{HousesProvider, Context}