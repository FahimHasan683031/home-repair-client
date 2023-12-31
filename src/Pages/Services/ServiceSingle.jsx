import { useLoaderData, useLocation } from "react-router-dom";
import ServicesModal from "./ServicesModal";
import BookingErrorModal from "./BookingErrorModal";
import useAuthContext from "../../Hoocks/useAuthContext";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hoocks/useAxiosSicure";
import ServiceCard from "../../Components/ServiceCard";

const ServiceSingle = () => {
    const location = useLocation()
    useEffect(() => {
        document.title = "Home Repair" + location.pathname
    }, [location])
    const { user } = useAuthContext()
    const service = useLoaderData()
    const { serviceName, serviceImage, providerName, email, price, area, providerDescription, serviceDescription, providerImage } = service

    // other services load
    const secureAxios = useAxiosSecure()
    const [otherServices, setOtherServices] = useState([])
    useEffect(() => {
        secureAxios.get(`/api/v1/services?email=${email}`)
            .then(res => {
                const filteredServices = res.data.filter(single => single._id !== service._id)
                setOtherServices(filteredServices)
            })
    }, [email, secureAxios, service])
    console.log(otherServices)

    return (
        <div className="max-w-screen-xl mx-auto px-6">
            <div className="max-w-screen-md mx-auto mb-32 px-6">
                <div className="mt-14 mb-5 flex flex-col md:flex-row gap-7">
                    <div className="md:w-1/3 w-full">
                        <img className=" w-full h-[200px] rounded  " src={providerImage} alt="" />
                    </div>
                    <div className="md:w-2/3 w-full text-center md:text-left">
                        <h1 className="text-3xl font-bold text-teal-600 mb-2 mt-1">{providerName}</h1>
                        <h3 className="text-lg font-medium">Location: {area}</h3>
                        <p className="my-3 font-medium text-[15px] leading-7">{providerDescription.slice(0, 220)}</p>
                    </div>
                </div>
                <div className="rounded-md   mb-5">
                    <img src={serviceImage} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
                    <div className="px-5">
                        <h1 className="text-2xl my-4 font-bold text-teal-600">{serviceName}</h1>
                        <p className="font-medium text-slate-600 text-[15px] leading-8">{serviceDescription}</p>
                        <div className="my-10 flex justify-between">
                            {
                                user?.email === email ? <BookingErrorModal /> : <ServicesModal service={service}></ServicesModal>
                            }

                            <h4 className="text-xl font-bold text-teal-600">Price: {price}$</h4>
                        </div>


                    </div>
                </div>
            </div>

            <div className="mb-20">
                <h1 className="text-4xl mb-14 font-bold text-teal-600 text-center">Other Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {
                        otherServices?.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceSingle;