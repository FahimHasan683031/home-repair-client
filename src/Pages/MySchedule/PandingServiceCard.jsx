import axios from "axios";
import { useState } from "react";


const PandingServiceCard = ({service,deleteHandle}) => {
    const{takingDate,servicePrice,serviceImage,serviceName}=service
    const [status,setStatus]=useState(`${service.status?service.status:'Pending'}`)

    const statusHandle=e=>{
       const statusValue= e.target.value;
       setStatus(statusValue)
        const data ={takingDate,servicePrice,serviceImage,serviceName,status:statusValue}

        axios.put(`http://localhost:5000/api/v1/bookings/${service._id}`,data)
        .then(res=>(''))
        .catch(err=>console.log(err.massage))

    }

  

    return (
        <div className="flex gap-5 h-[100px] md:w-[400px] mb-5 drop-shadow-lg bg-teal-50 rounded-md">
            <div className="w-1/4 h-full">
                <img className="h-full rounded-l w-full" src={serviceImage} alt="" />
                </div> 
            <div className="w-3/4 py-2">
                <div className="flex justify-between">
                <h1 className="font-medium text-teal-600">{serviceName}</h1>
                <select onChange={statusHandle} value={status} className={`text-sm mr-4 cursor-pointer px-1 py-1 drop-shadow-md  rounded text-white ${status==='Pending'&&'bg-rose-600'||status==='In Progress'&&'bg-sky-500'||status==='Completed'&&'bg-teal-500'} focus:outline-none `} name="status" id="">
                    <option  value="Pending">Pending</option>
                    <option  value="In Progress">In Progress</option>
                    <option  value="Completed">Completed</option>
                </select>
                </div>
                <h2 className="my-1">Date: {takingDate}</h2>
                <div className="flex justify-between">
                <p className="text-sm font-medium">price: {servicePrice}$</p>
                {
                    status === 'Completed'?<button onClick={()=>deleteHandle(service._id)} className="px-2 py-1 text-white text-sm font-medium rounded bg-rose-500">Delete</button>:''
                }
                </div>
            </div>
        </div>
    );
};

export default PandingServiceCard;