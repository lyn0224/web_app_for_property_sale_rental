import React, {useState, useEffect} from "react"
import {SearchForm} from '../components/export'
function Search(){
    const [searchTerm, setSearchTerm] = useState('');
    const [houses, setHouses] = useState([]);

    useEffect(() => {
        try{
            fetch('http://localhost:9000/search', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    searchTerm: searchTerm,
                })
            }).then(res => res.json()).then(result=>{
                console.log(result);
                let houseList = result.xxx;
                setHouses(houseList);
            })
        }catch(e){
            console.log(e);
        }
       
    }, []);

    return(
        <SearchForm>
            <SearchForm.Title>Home has never been more important
                </SearchForm.Title>
                <SearchForm.Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} >
                    </SearchForm.Search>
            </SearchForm>
      
    )
}

export default Search

  {/* <section className = "search-container">
                <h1 className="search-container-text">Home has never been more important</h1>

                <input type="search" placeholder ="Enter an address, neighborhood,city,or ZIP code"  className="search-container-searchbar"/>  
       
        </section> */}