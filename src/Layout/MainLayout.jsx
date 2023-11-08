import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";


const MainLayout = () => {
    return (
        <div className="text-7">
            <Header/>
            <Outlet/>
            <Footer/>
            <div><Toaster/></div>
        </div>
    );
};

export default MainLayout;