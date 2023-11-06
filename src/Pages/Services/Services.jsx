import { useEffect, useState } from "react";
import axios from 'axios';
import ServiceCard from "../../Components/ServiceCard";
const Services = () => {
    const [limit, setLimit] = useState(6)
    const [services, setServices] = useState([])
    const [searchText,setSearchText]=useState('')
    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/services?limit=${limit}&serviceName=${searchText}`)
            .then(data => setServices(data.data))
    }, [limit,searchText])
    const searchInputHandle =e=>{
        const value = e.target.value
        setSearchText(value)
    }
    return (
        <div className="max-w-screen-xl mx-auto px-6">
            this is services
            <input onChange={searchInputHandle} type="text" name="search" id="" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
                {
                    services?.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className={`text-center ${limit === 0 ? 'hidden' : ''}`}>

                
            <button onClick={() => setLimit(0)} className="px-3 py-2 mb-12 font-medium text-white bg-teal-600 rounded mx-auto">View All</button>
                
            </div>
        </div>
    );
};

export default Services;