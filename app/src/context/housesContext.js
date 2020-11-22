import React, {useState, createContext, Component, useEffect } from 'react';

const Context = React.createContext()
function HousesProvider({children}) {
    const [houses,setHouses] = useState()
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
    const [filterHouses, setFilterHouses] = useState()

    const Search_URL = 'http://localhost:9000/house';
    const Favorite_URL = 'http://localhost:9000/search';
    const Remove_URL = "#";
    const Add_URL = "#"
    const user = JSON.parse(localStorage.getItem('authUser'));



    useEffect( ()=>{
        fetch(Search_URL).then(response=>response.json()).then(result=>setHouses(result.dataset))
        filterDate();
        if(user){
            try{
                fetch(Favorite_URL, {
                    method: 'post',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: user.name,
                    })
                }).then(res => res.json()).then(result=>{
                    console.log(result);
                    let Favorite_List = result.xxx;
                    setFavorite(Favorite_List);
                })
            }catch(e){
                console.log(e);
            }
       }
    },[types, bed, bath, parking, minPrice, maxPrice, minSize, maxSize])


    function find_result(input){
        console.log(input)
        if(!input){
            setSearch(houses)
        }else{
            const array = houses.filter(house=>house.Owner_ID == input || house.city ==input)
            setSearch(array)
        }
    }

    // function handleSubmit(){
    //     if(!filterHouses && !search){
    //         setSearch(houses)
    //     }else{
    //         console.log(filterHouses);
    //         setSearch(filterHouses);
    //     }
    // }

    function handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = event.target.name;

        if(name === "type"){
            console.log("type", value);
            
            if(value !== "any"){
                setTypes(value);
                //tempHouses = tempHouses.filter(house=>house.bedroom >= value);
                console.log(types);
            }
            
        }
        if(name === "bed"){
            if(value !== "any"){
                setBed(value);
                //tempHouses = tempHouses.filter(house=>house.bedroom >= value);
            }
            // setBed(value);
        }
        if(name === "bath"){
            if(value !== "any"){
                setBath(value);
                //tempHouses = tempHouses.filter(house=>house.bedroom >= value);
            }
            // setBath(value);
        }
        if(name === "minPrice"){
            setMinPrice(value);
        }
        if(name === "maxPrice"){
            setMaxPrice(value);
        }
        if(name === "minSize"){
            // maxSize = value;
            setMinSize(value);
        }
        if(name === "maxSize"){
            // maxSize = value;
            setMaxSize(value);
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
            console.log(types, bath, bed, minPrice, maxPrice, minSize, maxSize, parking);
            let tempHouses = [...houses];
            console.log("before filter",tempHouses);
            tempHouses = tempHouses.filter(house => house.property_type === types);
            console.log("after types",tempHouses);
            tempHouses = tempHouses.filter(house=>house.bedroom >= bed);
            console.log("after bed",tempHouses);
            tempHouses = tempHouses.filter(house=>house.bedroom >= bath);
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
        return (
            <>
            <Context.Provider  value={{
                houses, handleChange,find_result,search,setSearch,removeFavorite,addFavorite,favorite, minSize, maxSize
                }}>
                {children}
            </Context.Provider>
            </>
        )
}



export{HousesProvider, Context}