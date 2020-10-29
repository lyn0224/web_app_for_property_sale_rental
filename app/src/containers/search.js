import React, {useState} from "react"
import {SearchForm} from '../components/export'
function Search(){
    const [searchTerm, setSearchTerm] = useState('');
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