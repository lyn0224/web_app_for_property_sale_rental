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

    const Search_URL = 'http://localhost:9000/house';
    const Favorite_URL = 'http://localhost:9000/search';
    const Remove_URL = "#";
    const Add_URL = "#"
    const user = JSON.parse(localStorage.getItem('authUser'));



    useEffect( ()=>{
        fetch(Search_URL).then(response=>response.json()).then(result=>setHouses(result.dataset))
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

    function handleChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = event.target.name;

        if(name === "type"){
            console.log("type", value);
            setTypes(value);
        }
        if(name === "bed"){
            // if(bed !== "any"){
            //     setBed(value);
            //     //tempHouses = tempHouses.filter(house=>house.bedroom >= value);
            // }
            setBed(value);
        }
        if(name === "bath"){
            // if(bath !== "any"){
            //     setBath(value);
            //     //tempHouses = tempHouses.filter(house=>house.bedroom >= value);
            // }
            setBath(value);
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
        // if(name === "parking"){
        //     setParking(value);
        // }
        console.log(types, bath, bed, minPrice, maxPrice, minSize, maxSize, parking);
        let tempHouses = [...houses];
        console.log(tempHouses);
        tempHouses = tempHouses.filter(house => house.property_type === types);
        tempHouses = tempHouses.filter(house=>house.bedroom >= bed);
        tempHouses = tempHouses.filter(house=>house.bedroom >= bath);
        tempHouses = tempHouses.filter(house=>house.price <= maxPrice && house.price >= minPrice)
        tempHouses = tempHouses.filter(house=>house.area <= maxSize && house.area >= minSize)
        // tempHouses = tempHouses.filter(house => house.parking === parking);
        console.log(tempHouses);
        setSearch(tempHouses);
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
                houses,handleChange,find_result,search,setSearch,removeFavorite,addFavorite,favorite, minSize, maxSize
                }}>
                {children}
            </Context.Provider>
            </>
        )
}



export{HousesProvider, Context}