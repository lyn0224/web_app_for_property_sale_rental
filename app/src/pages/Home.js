import React from "react"
import Search from "../components/Search"
import Footer from "../components/Footer"
import Grid from "../components/Grid_card"

function Home(){
    return(
        <>
            <main>
                <div className ="Home">
                    <Search/> 
                    <div className="Home-grid-container">
  
                            <Grid/>
                            <Grid/>
                            <Grid/>
               
                    </div>

                </div>
            </main>
            <Footer/> 
        </>
    )
}

export default Home