import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hoocks/useAxiosSicure";
import useMyServices from "../../Hoocks/useMyServices";

const MyservicesCard = ({ service }) => {
    const { serviceName, serviceImage, providerName, price, area, serviceDescription, providerImage } = service
    const axiosSecure=useAxiosSecure()
    const [,refetch] =useMyServices()
    const deleteHandle = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't  to delete this Service!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0d9488",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/api/v1/services/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your service has been deleted.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(err => console.log(err.message))
            }
        });
    }

    return (
        <div className="rounded-md shadow-md  bg-[#ccfbf186] mb-5 flex flex-col lg:flex-row">
            <div className="lg:w-2/5 w-full">
                <img src={serviceImage} alt="" className="object-cover object-center w-full h-72 rounded-l-md dark:bg-gray-500" />
            </div>
            <div className="px-5 w-full lg:w-3/5">
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
                    <Link to={`/updateService/${service._id}`}><button className="px-3 py-[6px] text-white bg-teal-600 rounded-sm text-sm font-bold"> Update</button></Link>
                    <button onClick={() => deleteHandle(service._id)} className="px-3 py-[6px] text-white bg-teal-600 rounded-sm text-sm font-bold"> Delete</button>

                </div>
            </div>
        </div>
    );
};


export default MyservicesCard;