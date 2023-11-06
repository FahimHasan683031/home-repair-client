import { Link } from "react-router-dom";
const ServiceCard = ({service}) => {
    const {serviceName,serviceImage,providerName,price,area,serviceDescription,providerImage }=service
    return (
        <div className="rounded-md shadow-md  bg-[#ccfbf186] mb-5">
            <div className="flex items-center justify-between p-3">
                <div className="flex items-center space-x-2">
                    <img src={providerImage} alt="" className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700" />
                    <div className="-space-y-1">
                        <h2 className="text-sm font-semibold text-neutral-700 leadi">{providerName}</h2>
                        <span className="inline-block text-xs font-medium  text-slate-600">{area}</span>
                    </div>
                </div>
                <button title="Open options" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                        <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
                        <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
                        <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
                    </svg>
                </button>
            </div>
            <img src={serviceImage} alt="" className="object-cover object-center w-full h-72 dark:bg-gray-500" />
            <div className="px-5">
                <h1 className="text-xl my-3 font-bold text-teal-600">{serviceName}</h1>
                <p className="font-medium text-slate-600 text-[15px]">{serviceDescription.slice(0,100)+'...'}</p>
                <div className="my-5 flex justify-between">
                    <Link to={`/services/${service._id}`}><button className="px-3 py-[6px] text-white bg-teal-600 rounded-sm text-sm font-bold"> Details</button></Link>
                    <h4 className="text-lg font-bold text-teal-600">Price: {price}$</h4>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;