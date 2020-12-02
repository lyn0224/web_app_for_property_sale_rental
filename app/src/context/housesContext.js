import React, {useState, createContext, Component, useEffect } from 'react';
import {DB} from '../constants/DB'
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

    const Search_URL = `${DB}/house`;
    // const Favorite_URL = `${DB}/search`;
    const Save_URL = `${DB}/save_search`;
    const Favorite_Home_URL = `${DB}/api/favorite/home`;

    const user = JSON.parse(localStorage.getItem('authUser'));

    useEffect( ()=>{
        fetch(Search_URL).then(response=>response.json()).then(result=>setHouses(result.dataset))
        filterDate();
        if(user){
            try{
                console.log("favorite");
                fetch(`${DB}/api/favorite/home?id=${user.id}`).then(res => res.json()).then(result=>{
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
            input = input.toString().toLowerCase()
            const array = houses.filter(house=>house.Owner_ID.toString().toLowerCase().includes(input) || house.city.toString().toLowerCase().includes(input))
            setSearch(array)
        }
    }

    function handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = event.target.name;
        console.log("name",name)
        console.log("value",value)
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
            if(bed !== "any"){
                tempHouses = tempHouses.filter(house=>house.bedroom >= bed);
            }
            console.log("after bed",tempHouses);
            if(bath !== "any"){
                tempHouses = tempHouses.filter(house=>house.bedroom >= bath);
            }
            if(year !== "all"){
                
                tempHouses = tempHouses.filter(house=>house.year_built >= year);
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
    async function handleSave(search_type){
        console.log(search_type,types, bed, bath, parking, minPrice, maxPrice, minSize, maxSize, year);

        // const SaveSearch_URL = `${DB}/api/search?search_type=${search_type}&uid=${user.id}&min_price=${minPrice}&max_price=${maxPrice}&house_size=${maxSize}&parking=${parking}&home_type=${types=="all"?null:types}&bedroom=${bed=="0"?null:bed}&bathroom=${bath=="0"?null:bath}&year_built=${year=="all"?null:year}`
        const SaveSearch_URL = `${DB}/api/search?search_type=${search_type}&uid=${user.id}&min_price=${minPrice}&max_price=${maxPrice}&bedroom=${bed=="0"?null:bed}&bathroom=${bath=="0"?null:bath}&year_built=${year=="all"?null:year}`
        console.log(SaveSearch_URL)
        try{
            console.log("save search");
            fetch(SaveSearch_URL).then(res => res.json()).then(result=>{
                console.log(result);
            })
        }catch(e){
            console.log(e);
        }
       
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
            fetch(`${DB}/api/favorite/home?id=${user.id}`).then(res => res.json()).then(result=>{
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
            fetch(`${DB}/api/favorite/home?id=${user.id}`).then(res => res.json()).then(result=>{
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
                houses,setHouses, handleChange,handleSave,find_result,search,setSearch,removeFavorite,addFavorite,favorite, minSize, maxSize
                }}>
                {children}
            </Context.Provider>
            </>
        )
}



export{HousesProvider, Context}