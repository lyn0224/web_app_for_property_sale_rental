import React from "react"
import Footer from "../containers/footer"
import Grid from "../components/Grid_card"
import Search from '../containers/search'
function Home(){
    return(
        <>
            <Search/> 
            <div className="Home-grid-container">

                    <Grid name="first"/>
                    <Grid name="second"/>
                    <Grid name="third"/>
        
            </div>
            <Footer/> 
        </>
    )
}

export default Home