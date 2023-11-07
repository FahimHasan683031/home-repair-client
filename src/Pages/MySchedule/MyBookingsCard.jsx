

const MyBookingsCard = ({service}) => {
    const{provider_name,takingDate,servicePrice,serviceImage,serviceName}=service
    return (
        <div className="flex gap-5 h-[95px] md:w-[350px] mb-5 drop-shadow-lg bg-teal-50 rounded-md">
            <div className="w-1/4 h-full">
                <img className="h-full rounded-l w-full" src={serviceImage} alt="" />
                </div> 
            <div className="w-3/4 py-2">
                <h1 className="font-medium text-teal-600">{serviceName}</h1>
                <h2 className="my-1">Date: {takingDate}</h2>
                <p className="text-sm font-medium">price: {servicePrice}$</p>
            </div>
        </div>
    );
};

export default MyBookingsCard;