import React, {useState, createContext, Component, useEffect } from 'react';

const Context = React.createContext()
function HousesProvider({children}) {
    const [houses,setHouses] = useState()
    const [search,setSearch] = useState()
    const [favorite,setFavorite] = useState()
    const [type,setType] = useState()
    const [bed,setBed] = useState(0)
    const [bath,setBath] = useState(0)
    const [parking, setParking] = useState();
    const [minPrice, setMinPrice] = useState("0");
    const [maxPrice, setMaxPrice] = useState("10000000");
    const [minSize, setMinSize] = useState(0);
    const [maxSize, setMaxSize] = useState(1500);

    const Search_URL = 'http://localhost:9000/house';
    const Favorite_URL = 'http://localhost:9000/search';
    const Remove_URL = "#";
    const Add_URL = "#"
    const user = JSON.parse(localStorage.getItem('authUser'));



    useEffect( ()=>{
        fetch(Search_URL).then(response=>response.json()).then(result=>setHouses(result.dataset))
        if(houses){
            let minP = Math.min(...houses.map(item => item.price));
            let maxP = Math.max(...houses.map(item => item.price));
            let maxS = Math.max(...houses.map(item => item.size));
            let minS = Math.max(...houses.map(item => item.size));
            setMinPrice(minP)
            setMinSize(minS)
            setMaxPrice(maxP)
            setMaxSize(maxS)
        }
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
        const id = event.target.id;
        let minPrice = 0;
        let maxPrice = 100000000;
        let bed = 0;
        let bath = 0;
        if(name === "type"){
            if (value !== 'all') {
                setType(value);
                // tempHouses = tempHouses.filter(house => house.property_type === value);
            }
        }
        if(name === "bed"){
            if(bed !== "any"){
                setBed(value);
                //tempHouses = tempHouses.filter(house=>house.bedroom >= value);
            }
        }
        if(name === "bath"){
            if(bath !== "any"){
                setBath(value);
                //tempHouses = tempHouses.filter(house=>house.bedroom >= value);
            }
        }
        if(name === "minPrice"){
            if(value <= minPrice){
                setMinPrice(value);
            }
        }
        if(name === "maxPrice"){
            if(value >= maxPrice){
                setMaxPrice(value);
            }
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
            // console.log(value);
            // tempHouses = tempHouses.filter(house => house.parking === value);
            setParking(value);
        }

        // tempHouses = tempHouses.filter(house => house.area >= minSize && house.area <= maxSize);
        filterHouses();
    }

    function filterHouses(){
        let tempHouses = [...houses];
        tempHouses = tempHouses.filter(house => house.p_type === type);
        tempHouses = tempHouses.filter(house=>house.bedroom >= bed);
        tempHouses = tempHouses.filter(house=>house.bedroom >= bath);
        tempHouses = tempHouses.filter(house=>house.price <= maxPrice && house.price >= minPrice)
        tempHouses = tempHouses.filter(house=>house.size <= maxSize && house.price >= minSize)
        if(parking){
            tempHouses = tempHouses.filter(house => house.parking === parking);
        }
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
    console.log(search)
        return (
            <>
            <Context.Provider  value={{
                houses,handleChange,find_result,search,setSearch,removeFavorite,addFavorite,favorite
                }}>
                {children}
            </Context.Provider>
            </>
        )
}



export{HousesProvider, Context}