import { useLocation } from "react-router-dom";
import Banner from "../../Components/Banner";
import Faq from "../../Components/Faq";
import Feature from "../../Components/Feature";
import WhyChoseUs from "../../Components/WhyChoseUs";
import HomeServices from "./HomeServices";
import { useEffect } from "react";



const Home = () => {
    const location = useLocation()
    useEffect(()=>{
        document.title= "Home Repair"+" | "+"Home"
    },[location])
    return (
        <div>
            <Banner/>
            <HomeServices/>
            <Feature/>
            <WhyChoseUs/>
            <Faq/>
            
        </div>
    );
};

export default Home;