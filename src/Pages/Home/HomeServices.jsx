import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hoocks/useAxiosSicure";
import ServiceCard from "../../Components/ServiceCard";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import lotianimation from "../../assets/lotianimation.json"


const HomeServices = () => {
  const axiosSecure = useAxiosSecure()
  const [services,setServices]=useState()
    useEffect(() => {
        axiosSecure.get(`/api/v1/services?limit=4`)
            .then(data => setServices(data.data))
    }, [ axiosSecure])
    if(!services){
        return (<Lottie className="w-1/3 h-1/3 mx-auto" animationData={lotianimation}></Lottie>)
    }
    
    return (
        <div className="max-w-screen-lg mb-32 mx-auto px-6">
            <h1 className="text-3xl font-bold text-emerald-600 text-center  mb-3"> POPULAR SERVICES </h1>
            <p className=" text-center text-slate-500 font-medium leading-7 mb-8 ">We provide vest qualityfull services. We try to <br />  ensure 100% client satisfaction. </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
                {
                    services?.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className="text-center mt-10">
            <Link to='/services' className="text-white font-medium px-3 py-2 bg-teal-600 mx-auto rounded">View All</Link>
            </div>
        </div>
    );
};

export default HomeServices;