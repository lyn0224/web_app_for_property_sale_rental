import React, {useState, createContext, Component, useEffect } from 'react';

const Context = React.createContext()
function HousesProvider({children}) {

    const [houses,setHouses] = useState()
    const [Favorite_Home,setFavorite_Home] = useState()
    const [search,setSearch] = useState()
    const [favorite,setFavorite] = useState()
    const [types,setTypes] = useState("all")
    const [bed,setBed] = useState(0)
    const [bath,setBath] = useState(0)
    const [parking, setParking] = useState(0);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(10000000);
    const [minSize, setMinSize] = useState(0);
    const [maxSize, setMaxSize] = useState(3000);
    const [flooring, setFoorling] = useState('all')
    const [year, setYear] = useState('all')

    const Search_URL = 'http://localhost:9000/house';
    const Favorite_URL = 'http://localhost:9000/search';
    const Save_URL = 'http://localhost:9000/save_search';
    const Favorite_Home_URL = "http://localhost:9000/api/favorite/home";

    const user = JSON.parse(localStorage.getItem('authUser'));

    useEffect( ()=>{
        fetch(Search_URL).then(response=>response.json()).then(result=>setHouses(result.dataset))
        filterDate();
        if(user){
            try{
                console.log("favorite");
                fetch(`http://localhost:9000/api/favorite/home?id=${user.id}`).then(res => res.json()).then(result=>{
                    console.log(result);
                    let Favorite_List = result.list;
                    setFavorite(Favorite_List);
                })
            }catch(e){
                console.log(e);
            }
       }
    },[types, bed, bath, parking, minPrice, maxPrice, minSize, maxSize, year])


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
        if(name === "minPrice"){
            setMinPrice(value);
        }
        if(name === "maxPrice"){
            setMaxPrice(value);
        }
        if(name === "minSize"){
            setMinSize(value);
        }
        if(name === "maxSize"){
            setMaxSize(value);
        }
        if(name === "flooring"){
            setFoorling(value);
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

    function filterDate(){
        if(houses){
            console.log(types, bath, bed, minPrice, maxPrice, minSize, maxSize, parking, flooring);
            let tempHouses = [...houses];
            console.log("before filter",tempHouses);
            if(types !== "all"){
                tempHouses = tempHouses.filter(house => house.property_type === types);
            }
            if(flooring !== "all"){
                tempHouses = tempHouses.filter(house => house.flooring === flooring);
            }
            console.log("after flooring",tempHouses);
            if(bed !== "any+"){
                tempHouses = tempHouses.filter(house=>house.bedroom >= bed);
            }
            console.log("after bed",tempHouses);
            if(bath !== "any+"){
                tempHouses = tempHouses.filter(house=>house.bedroom >= bath);
            }
            console.log("after bath",tempHouses);
            tempHouses = tempHouses.filter(house=>house.price <= maxPrice && house.price >= minPrice)
            console.log("after prices",tempHouses);
            tempHouses = tempHouses.filter(house=>house.area <= maxSize && house.area >= minSize)
            console.log("after size",tempHouses);
            tempHouses = tempHouses.filter(house => house.parking === parking);
            console.log("after filter",tempHouses);
            setSearch(tempHouses);
        }
    }

    async function handleSave(){
        console.log(types, bed, bath, parking, minPrice, maxPrice, minSize, maxSize, year);
        // try{
        //     let res = await fetch(Save_URL, {
        //         method: 'post',
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({
        //             table: table,
        //             types: types,
        //             bed: bed,
        //             bath: bath,
        //             parking: parking,
        //             flooring: flooring,  
        //             minPrice: minPrice, 
        //             maxPrice: maxPrice, 
        //             minSize: minSize, 
        //             maxSize: maxSize,
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
        console.log(house)
        try{
            let res = await fetch(Favorite_Home_URL, {
                method: 'delete',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    U_ID: user.id,
                    home_type :"h", 
                    properity_id:house.S_ID,
                })
            });
            let result = await res.json();
            console.log(result);
            if(result && result.success){
                console.log("successful delete from favorite");
            }else if(result && result.success === false){
                alert(result.msg);
            }
        }catch(e){
            console.log(e);
        }
        // const update = favorite.filter()
        try{
            console.log("favorite");
            fetch(`http://localhost:9000/api/favorite/home?id=${user.id}`).then(res => res.json()).then(result=>{
                console.log(result);
                let Favorite_List = result.list;
                setFavorite(Favorite_List);
            })
        }catch(e){
            console.log(e);
        }
    }
    async function addFavorite(house){
        console.log(user)
        try{
            let res = await fetch(Favorite_Home_URL, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    U_ID: user.id,
                    home_type :"h", 
                    properity_id:house.S_ID,
                })
            });
            let result = await res.json();
            console.log(result);
            if(result && result.success){
                console.log("successful add to favorite");
            }else if(result && result.success === false){
                alert(result.msg);
            }
        }catch(e){
            console.log(e);
        }
        try{
            console.log("favorite");
            fetch(`http://localhost:9000/api/favorite/home?id=${user.id}`).then(res => res.json()).then(result=>{
                console.log(result);
                let Favorite_List = result.list;
                setFavorite(Favorite_List);
            })
        }catch(e){
            console.log(e);
        }
 
    }
        return (
            <>
            <Context.Provider  value={{
                houses, handleChange,handleSave,find_result,search,setSearch,removeFavorite,addFavorite,favorite, minSize, maxSize
                }}>
                {children}
            </Context.Provider>
            </>
        )
}



export{HousesProvider, Context}