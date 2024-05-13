import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Finance from "../components/finance";
import Newsletter from "../components/newsletter";
import Cards from "../components/cards"
import Footer from "../components/footer";

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Finance/>
            <Newsletter/>
            <Cards/>
            <Footer/>
        </div>
    )
}

export default Main