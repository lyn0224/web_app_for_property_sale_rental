import React, {useState, createContext, Component, useEffect } from 'react';

const Context = React.createContext()
function HousesProvider({children}) {
    const [houses,setHouses] = useState()
    const [search,setSearch] = useState()
    const [favorite,setFavorite] = useState()
    const [filter,setFilter] = useState()
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
        let tempHouses = [...houses];
        let minPrice = 0;
        let maxPrice = 100000000;
        let bed = 0;
        let bath = 0;
        
        if(name === "type"){
            if (value !== 'all') {
                tempHouses = tempHouses.filter(house => house.property_type === value);
            }
        }
        if(name === "bed"){
            if(bed !== "any"){
                tempHouses = tempHouses.filter(house=>house.bedroom >= value);
            }
        }
        if(name === "bath"){
            if(bath !== "any"){
                tempHouses = tempHouses.filter(house=>house.bedroom >= value);
            }
        }
        if(name === "minPrice"){
            if(value >= minPrice){
                minPrice = value;
            }
        }
        if(name === "maxPrice"){
            if(value <= maxPrice){
                maxPrice = value;
            }
        }
        console.log(tempHouses);
        tempHouses = tempHouses.filter(house=>house.price <= maxPrice && house.price >= minPrice)

        if(name === "minSize"){
            // maxSize = value;
            setMinSize(value);
        }
        if(name === "maxSize"){
            // maxSize = value;
            setMaxSize(value);
        }

        // console.log("min", minSize)
        // console.log("max", maxSize)
        if(name === "parking"){
            console.log(value);
            tempHouses = tempHouses.filter(house => house.parking === value);
        }

        tempHouses = tempHouses.filter(house => house.area >= minSize && house.area <= maxSize);

        setSearch(tempHouses)
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