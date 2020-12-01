import React, {useState, createContext, Component, useEffect } from 'react';

const Context = React.createContext()
function RealtorProvider({children}) {

    const [realtors,setRealtors] = useState()
    const [search,setSearch] = useState()
    const [firstName,setFirstName] = useState()
    const [lastName,setLastName] = useState()
    const [email,setEmail] = useState()
    const [phone,setPhone] = useState()
    const [zipcode,setZipcode] = useState()
    const [sales,setSales] = useState()
    const [rent, setRent] = useState();
    const [specialty, setSpecialty] = useState();

    const Search_URL = 'http://localhost:9000/api/realtor/zip?keyword';

    const user = JSON.parse(localStorage.getItem('authUser'));

    useEffect( ()=>{
        fetch(Search_URL).then(response=>response.json()).then(result=>setRealtors(result.dataset))
        console.log("here are realtor", realtors)
    },[realtors])

    function find_result(input){
        console.log(input)
        if(!input){
            setSearch(realtors)
        }else{
            const array = realtors.filter(realtor=>realtor.zipcode == input || realtor.Fname ==input)
            setSearch(array)
        }
    }

    return (
        <>
        <Context.Provider  value={{
            realtors, find_result, search
            }}>
            {children}
        </Context.Provider>
        </>
    )
}



export{RealtorProvider, Context}