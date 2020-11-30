import React, {useState, createContext, Component, useEffect } from 'react';

const Context = React.createContext()
function RealtorProvider({children}) {

    const [realtor,setRealtors] = useState()
    const [firstName,setFirstName] = useState()
    const [lastName,setLastName] = useState()
    const [email,setEmail] = useState()
    const [phone,setPhone] = useState()
    const [zipcode,setZipcode] = useState()
    const [sales,setSales] = useState()
    const [rent, setRent] = useState();
    const [specialty, setSpecialty] = useState();

    const Search_URL = 'http://localhost:9000/realtor';

    const user = JSON.parse(localStorage.getItem('authUser'));

    useEffect( ()=>{
        fetch(Search_URL).then(response=>response.json()).then(result=>setRealtors(result.dataset))
    })

    // function find_result(input){
    //     console.log(input)
    //     if(!input){
    //         setSearch(houses)
    //     }else{
    //         const array = houses.filter(house=>house.Owner_ID == input || house.city ==input)
    //         setSearch(array)
    //     }
    // }

    return (
        <>
        <Context.Provider  value={{
            realtor
            }}>
            {children}
        </Context.Provider>
        </>
    )
}



export{RealtorProvider, Context}