import { useEffect} from "react";
import MyservicesCard from "./MyservicesCard";
import { useLocation } from "react-router-dom";
import useMyServices from "../../Hoocks/useMyServices";

const MyServices = () => {
    const [services] =useMyServices()
    const location = useLocation()
    useEffect(() => {
        document.title = "Home Repair" + location.pathname
    }, [location])

   

    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/bQ1JWBp/mp-our-services-mobile.png')]  relative bg-no-repeat bg-cover bg-top py-10 lg:py-16">
                <div className="absolute h-full w-full top-0 z-0 left-0 bg-[#080808a8]"></div>
                <div className="text-center relative z-20">
                    <h1 className="text-4xl lg:text-5xl mb-3 font-bold text-teal-500">My Services</h1>
                </div>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-xl mx-auto px-6 my-16">
                {
                    services?.map(service => <MyservicesCard key={service._id} service={service} ></MyservicesCard>)
                }
            </div>


        </div>
    );
};

export default MyServices;