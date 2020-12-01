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

    useEffect(()=>{
        fetch(Search_URL).then(response=>response.json()).then(result=>setRealtors(result.list))
    },[search])

    function find_result(input){
        if(!input){
            setSearch(realtors)
        }else{
            const array = realtors.filter(realtor=>realtor.zipcode == input)
            setSearch(array)
        }
    }

    function find_name(input){
        if(!input){
            setSearch(realtors)
        }else{
            const array = realtors.filter(realtor=>realtor.Fname == input || realtor.Lname == input)
            setSearch(array)
        }
    }

    return (
        <>
        <Context.Provider  value={{
            realtors, find_result, search, find_name
            }}>
            {children}
        </Context.Provider>
        </>
    )
}



export{RealtorProvider, Context}