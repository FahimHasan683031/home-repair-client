import axios from "axios";
import { useEffect, useState } from "react";
import useAuthContext from "../../Hoocks/useAuthContext";
import MyservicesCard from "./MyservicesCard";

const MyServices = () => {
    const {user}=useAuthContext()
    const [myServices,setMyServices]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/v1/services?email=${user?.email}`)
        .then(res=>setMyServices(res.data))
    },[user])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-xl mx-auto px-6 my-16">
                {
                    myServices?.map(service=><MyservicesCard key={service._id} service={service}></MyservicesCard>)
                }
            </div>
        </div>
    );
};

export default MyServices;