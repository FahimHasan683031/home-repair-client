import { useState } from "react";


const PandingServiceCard = ({service}) => {
    const{takingDate,servicePrice,serviceImage,serviceName}=service
    const [status,setStatus]=useState('Pending')
    const statusHandle=e=>{
        setStatus(e.target.value)
    }

    return (
        <div className="flex gap-5 h-[100px] md:w-[400px] mb-5 drop-shadow-lg bg-teal-50 rounded-md">
            <div className="w-1/4 h-full">
                <img className="h-full rounded-l w-full" src={serviceImage} alt="" />
                </div> 
            <div className="w-3/4 py-2">
                <div className="flex justify-between">
                <h1 className="font-medium text-teal-600">{serviceName}</h1>
                <select onChange={statusHandle} className={`text-sm mr-4  px-1 py-1 drop-shadow-md  rounded text-white ${status==='Pending'&&'bg-rose-600'||status==='In Progress'&&'bg-sky-500'||status==='Completed'&&'bg-teal-500'} focus:outline-none `} name="status" id="">
                    <option defaultChecked value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                </div>
                <h2 className="my-1">Date: {takingDate}</h2>
                <p className="text-sm font-medium">price: {servicePrice}$</p>
            </div>
        </div>
    );
};

export default PandingServiceCard;