import { Link } from "react-router-dom";

const MyservicesCard = ({ service }) => {
    const { serviceName, serviceImage, providerName, price, area, serviceDescription, providerImage } = service
    return (
        <div className="rounded-md shadow-md  bg-[#ccfbf186] mb-5 flex flex-col lg:flex-row">
            <div>
                <img src={serviceImage} alt="" className="object-cover object-center w-full h-72 rounded-l-md dark:bg-gray-500" />
            </div>
            <div className="px-5">
                <h1 className="text-xl my-3 font-bold text-teal-600">{serviceName}</h1>
                <p className="font-medium text-slate-600 text-[15px]">{serviceDescription.slice(0, 100) + '...'}</p>
                <h4 className="text-lg mt-3 font-bold text-teal-600">Price: {price}$</h4>
                <div className="flex items-center justify-between p-3">
                    <div className="flex items-center space-x-2">
                        <img src={providerImage} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700" />
                        <div className="-space-y-1">
                            <h2 className="text-sm font-semibold text-neutral-700 leadi">{providerName}</h2>
                            <span className="inline-block text-xs font-medium  text-slate-600">{area}</span>
                        </div>
                    </div>
                    
                </div>
                <div className="my-2 pb-2 flex justify-around">
                    <Link to={`/services/${service._id}`}><button className="px-3 py-[6px] text-white bg-teal-600 rounded-sm text-sm font-bold"> Update</button></Link>
                    <Link to={`/services}`}><button className="px-3 py-[6px] text-white bg-teal-600 rounded-sm text-sm font-bold"> Delete</button></Link>
                    
                </div>
            </div>
        </div>
    );
};


export default MyservicesCard;