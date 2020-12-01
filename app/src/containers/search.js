import React, {useState, useEffect} from "react"
import {SearchForm} from '../components/export'
function Search(){
    const [searchTerm, setSearchTerm] = useState('');
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        try{
            fetch(`http://localhost:9000/api/search?search_type=r&keyword=${searchTerm}`, {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                // body: JSON.stringify({
                //     keyword: searchTerm
                // })
            }).then(res => res.json()).then(result=>{
                console.log(result);
                // let houseList = result.xxx;
                // setHouses(houseList);
            })
        }catch(e){
            console.log(e);
        }
       
    }, [searchTerm]);

    return(
        <SearchForm>
            <SearchForm.Title>
                Home has never been more important
            </SearchForm.Title>
            {console.log("this is searchTerm", searchTerm)}
            <SearchForm.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </SearchForm>
      
    )
}

export default Search
