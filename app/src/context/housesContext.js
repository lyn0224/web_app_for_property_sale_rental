import React, {useState, createContext, Component, useEffect } from 'react';

const Context = React.createContext()
function HousesProvider({children}) {
    const [houses,setHouses] = useState()
    const [search,setSearch] = useState()
    const [favorite,setFavorite] = useState()
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
    async function removeFavorite(house){
        try{
            let res = await fetch(Remove_URL, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: user.username,
                    // houseInfor : house
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
    }
    async function addFavorite(){

    }
    console.log(search)
        return (
            <>
            <Context.Provider  value={{
                houses,find_result,search,setSearch,removeFavorite,addFavorite,favorite
                }}>
                {children}
            </Context.Provider>
            </>
        )
}



export{HousesProvider, Context}