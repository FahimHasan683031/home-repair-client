import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";


const MainLayout = () => {
    return (
        <div className="text-7">
            <Header/>
            <Outlet/>
            <div><Toaster/></div>
        </div>
    );
};

export default MainLayout;