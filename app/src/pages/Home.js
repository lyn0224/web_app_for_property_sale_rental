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
  
                            <Grid name="first"/>
                            <Grid name="second"/>
                            <Grid name="third"/>
               
                    </div>

                </div>
            </main>
            <Footer/> 
        </>
    )
}

export default Home