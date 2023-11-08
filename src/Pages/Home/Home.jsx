import Banner from "../../Components/Banner";
import Faq from "../../Components/Faq";
import Feature from "../../Components/Feature";
import WhyChoseUs from "../../Components/WhyChoseUs";
import HomeServices from "./HomeServices";



const Home = () => {
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