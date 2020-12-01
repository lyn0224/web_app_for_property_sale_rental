import React, {useState, createContext, Component, useEffect } from 'react';

const RentContext = React.createContext()
function RentProvider({children}) {
    const [houses,setHouses] = useState()
    const [search,setSearch] = useState()
    const [favorite,setFavorite] = useState()
    const [types,setTypes] = useState("all")
    const [bed,setBed] = useState(0)
    const [bath,setBath] = useState(0)
    const [parking, setParking] = useState(0);
    const [minRate, setMinRate] = useState(0);
    const [maxRate, setMaxRate] = useState(10000);
    const [minSize, setMinSize] = useState(0);
    const [maxSize, setMaxSize] = useState(3000);
    const [available, setAvailable] = useState()
    const [flooring, setFlooring] = useState('all')
    const [year, setYear] = useState('all')

    const Rent_Search_URL = 'http://localhost:9000/rent';
    const Rent_Favorite_URL = '#';
    const Rent_Save_URL = '#';
    const Rent_Remove_URL = "#";
    const Rent_Add_URL = "#"
    const user = JSON.parse(localStorage.getItem('authUser'));


    console.log("i am context")
    useEffect( ()=>{
        
        fetch(Rent_Search_URL).then(response=>response.json()).then(result=>setHouses(result.dataset))
        filterData();
    //     if(user){
    //         try{
    //             fetch(Rent_Favorite_URL, {
    //                 method: 'post',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Accept': 'application/json'
    //                 },
    //                 body: JSON.stringify({
    //                     username: user.name,
    //                 })
    //             }).then(res => res.json()).then(result=>{
    //                 console.log(result);
    //                 let Favorite_List = result.xxx;
    //                 setFavorite(Favorite_List);
    //             })
    //         }catch(e){
    //             console.log(e);
    //         }
    //    }
    },[types, bed, bath, parking, minRate, maxRate, flooring, minSize, maxSize, available])


    function find_result(input){
        console.log(input)
        if(!input){
            setSearch(houses)
        }else{
            const array = houses.filter(house=>house.Owner_ID == input || house.city ==input)
            setSearch(array)
        }
    }

    function handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = event.target.name;
        if(name === "type"){
            setTypes(value);
        }
        if(name === "bed"){
            setBed(value);
        }
        if(name === "bath"){
            setBath(value);
        }
        if(name === "minRate"){
            setMinRate(value);
        }
        if(name === "maxPrice"){
            setMaxRate(value);
        }
        if(name === "minSize"){
            setMinSize(value);
        }
        if(name === "maxSize"){
            setMaxSize(value);
        }
        if(name === "flooring"){
            setFlooring(value);
        }
        if(name === "available"){
            setAvailable(value);
        }
        if(name === "year"){
            setYear(value);
        }
        if(name === "parking"){
            if(value){
                setParking(1);
            }else{
                setParking(0);
            }
        }
    }

    function filterData(){
        if(houses){
            console.log(types, bath, bed, minRate, maxRate, minSize, maxSize, parking, flooring, available, year);
            let tempHouses = [...houses];
            console.log("before filter",tempHouses);
            if(types !== "all"){
                tempHouses = tempHouses.filter(house => house.property_type === types);
            }
            console.log("after types",tempHouses);
            if(bed !== "any+"){
                tempHouses = tempHouses.filter(house=>house.bedroom >= bed);
            }
            console.log("after bed",tempHouses);
            if(bath !== "any+"){
                tempHouses = tempHouses.filter(house=>house.bedroom >= bath);
            }
            if(flooring !== "all"){
                tempHouses = tempHouses.filter(house=>house.bedroom >= bath);
            }
            console.log("after bath",tempHouses);
            console.log(minRate, maxRate)
            tempHouses = tempHouses.filter(house=>house.rate <= maxRate && house.rate >= minRate)
            console.log("after prices",tempHouses);
            tempHouses = tempHouses.filter(house=>house.area <= maxSize && house.area >= minSize)
            console.log("after size",tempHouses);
            tempHouses = tempHouses.filter(house => house.parking === parking);
            console.log("after parking", tempHouses);
            // tempHouses = tempHouses.filter(house => house.available_date >= available);
            // console.log("after available",tempHouses);
            setSearch(tempHouses);
        }
    }

    async function handleSave(){
        console.log(types, bath, bed, minRate, maxRate, minSize, maxSize, parking, flooring, available, year);
        // try{
        //     let res = await fetch(Rent_Save_URL, {
        //         method: 'post',
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             types: types,
        //             bed: bed,
        //             bath: bath,
        //             parking: parking,
        //             minRate: minRate, 
        //             maxRate: maxRate, 
        //             minSize: minSize, 
        //             maxSize: maxSize,
        //             flooring: flooring, 
        //             available: available
        //             year: year
        //         })
        //     });
        //     let result = await res.json();
        //     console.log(result);
        //     if(result && result.success){
        //         console.log("successful add to save search");
        //     }else if(result && result.success === false){
        //         alert(result.msg);
        //     }
        // }catch(e){
        //     console.log(e);
        // }
    }

    async function removeFavorite(house){
        // try{
        //     let res = await fetch(Remove_URL, {
        //         method: 'post',
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             username: user.username,
        //             // houseInfor : house
        //         })
        //     });
        //     let result = await res.json();
        //     console.log(result);
        //     if(result && result.success){
        //         console.log("successful add to favorite");
        //     }else if(result && result.success === false){
        //         alert(result.msg);
        //     }
        // }catch(e){
        //     console.log(e);
        // }
        setFavorite(false)
    }
    async function addFavorite(){
        setFavorite(true)
    }
    console.log(houses);
    return (
        <>
        <RentContext.Provider  value={{
            houses, handleChange,handleSave,find_result,search,setSearch,removeFavorite,addFavorite,favorite, minSize, maxSize
            }}>
            {children}
        </RentContext.Provider>
        </>
    )
}



export{RentProvider, RentContext}