import axios from "axios";
import { useEffect, useState } from "react";
import useAuthContext from "../../Hoocks/useAuthContext";
import MyservicesCard from "./MyservicesCard";
import Swal from "sweetalert2";

const MyServices = () => {
    const { user } = useAuthContext()
    const [myServices, setMyServices] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/services?email=${user?.email}`)
            .then(res => setMyServices(res.data))
    }, [user])

    // delete service
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
                axios.delete(`http://localhost:5000/api/v1/services/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            setMyServices(myServices.filter(service=>service._id!==_id))
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
        <div>
            <div className="bg-[url('https://i.ibb.co/bQ1JWBp/mp-our-services-mobile.png')]  relative bg-no-repeat bg-cover bg-top py-16">
                <div className="absolute h-full w-full top-0 z-0 left-0 bg-[#080808a8]"></div>
                <div className="text-center relative z-20">
                    <h1 className="text-5xl mb-3 font-bold text-teal-400">My Services</h1>
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-xl mx-auto px-6 my-16">
                {
                    myServices?.map(service => <MyservicesCard key={service._id} service={service} deleteHandle={deleteHandle}></MyservicesCard>)
                }
            </div>
        </div>
    );
};

export default MyServices;