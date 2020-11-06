import React from "react"
import Footer from "../containers/footer"
import Grid from "../components/Grid_card"
import Search from '../containers/search'
import DefaultImg from '../img/homeicon.png'
function Home(){
    return(
        <>
            <Search/> 
            <div className="Home-grid-container">
                <Grid name="Buy a home" 
                    description="Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else." 
                    img={DefaultImg}
                    id = "Search homes"/>
                <Grid name="Sell a home" 
                    description="Whether you sell with new Zillow Offers™ or take another approach, we’ll help you navigate the path to a successful sale." 
                    img={DefaultImg}
                    id = "See your options"/>
                <Grid name="Rent a home" 
                    description="We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent." 
                    img={DefaultImg}
                    id = "Find rentals"/>
            </div>
            <Footer/> 
        </>
    )
}

export default Home