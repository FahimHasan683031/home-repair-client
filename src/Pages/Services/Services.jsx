import { useEffect, useState } from "react";
import ServiceCard from "../../Components/ServiceCard";
import { AiOutlineSearch } from "react-icons/ai";
import useAxiosSecure from "../../Hoocks/useAxiosSicure";
import { useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import lotianimation from "../../assets/lotianimation.json"
const Services = () => {
    const location = useLocation()
    useEffect(() => {
        document.title = "Home Repair" + location.pathname
    }, [location])
    const axiosSecure = useAxiosSecure()
    const [limit, setLimit] = useState(6)
    const [services, setServices] = useState()
    const [searchText, setSearchText] = useState("")
    useEffect(() => {
        axiosSecure.get(`/api/v1/services?limit=${limit}&serviceName=${searchText}`)
            .then(data => setServices(data.data))
    }, [limit, searchText, axiosSecure])
    const searchInputHandle = e => {
        const value = e.target.value
        setSearchText(value)
    }
    if(!services){
        return (<Lottie className="w-1/3 h-1/3 mx-auto" animationData={lotianimation}></Lottie>)
    }
    console.log('data')
    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/bQ1JWBp/mp-our-services-mobile.png')]   bg-no-repeat bg-cover relative bg-top py-8 lg:py-14">
                <div className="absolute h-full w-full top-0 z-0 left-0 bg-[#080808a8]"></div>
                <div className="text-center relative z-20">
                    <h1 className="text-4xl lg:text-5xl  font-bold text-teal-500">Our Services</h1>
                    <div className=" flex items-center justify-center">
                    <input className="w-3/5 md:w-2/5 lg:w-1/3 px-3 py-[6px] lg:py-[9px] text-sm rounded-sm my-5 lg:my-7 " placeholder="Search Services By Name..." onChange={searchInputHandle} type="text" name="search" id="" />
                    <AiOutlineSearch className="text-teal-500 text-2xl -ml-8 md:-ml-10"></AiOutlineSearch>
                    </div>
                </div>

            </div>
            <div className="max-w-screen-xl mt-16 mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
                    {
                        services?.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>



                <div className={`text-center ${limit === 0 ? 'hidden' : ''}`}>


                    <button onClick={() => setLimit(0)} className="px-3 py-2 mb-12 font-medium text-white bg-teal-600 rounded mx-auto">View All</button>

                </div>
            </div>
        </div>
    );
};

export default Services;