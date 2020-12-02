import React, {useState, useEffect} from "react"
import {SearchForm} from '../components/export'
import {DB} from '../constants/DB'
function Search(){
    // const [searchTerm, setSearchTerm] = useState('');
    // const [houses, setHouses] = useState([]);

    // useEffect(() => {
    //     try{
    //         fetch(`${DB}/api/search?search_type=r&keyword=${searchTerm}`, {
    //             method: 'post',
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/json'
    //             },
    //             // body: JSON.stringify({
    //             //     keyword: searchTerm
    //             // })
    //         }).then(res => res.json()).then(result=>{
    //             console.log(result);
    //             // let houseList = result.xxx;
    //             // setHouses(houseList);
    //         })
    //     }catch(e){
    //         console.log(e);
    //     }
       
    // }, [searchTerm]);

    return(
        <SearchForm>
            <SearchForm.Title>
                Home has never been more important
            </SearchForm.Title>
        </SearchForm>
      
    )
}

export default Search
