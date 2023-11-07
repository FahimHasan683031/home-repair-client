import { useEffect, useState } from "react";
import axios from 'axios';
import useAuthContext from "../../Hoocks/useAuthContext";
import MyBookingsCard from "./MyBookingsCard";
import PandingServiceCard from "./PandingServiceCard";
import Swal from "sweetalert2";
const MySchedule = () => {
    const { user } = useAuthContext()
    // provide services
    const [provideServices, setProvideServices] = useState([])
    const [bookedServices, setBookedServices] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/bookings?providerEmail=${user?.email}`)
            .then(res => setProvideServices(res.data))
            .catch(err => console.log(err.massage))

        axios.get(`http://localhost:5000/api/v1/bookings?userEmail=${user?.email}`)
            .then(res => setBookedServices(res.data))
            .catch(err => console.log(err.massage))
    }, [user])
// service cancel
    const cancelHandle = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't  to cancel this Service!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0d9488",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/api/v1/bookings/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            setBookedServices(bookedServices.filter(service=>service._id!==_id))
                            Swal.fire({
                                title: "Canceled!",
                                text: "Your service has been canceled.",
                                icon: "success"
                            });
                        }
                    })
                    .catch(err => console.log(err.message))
            }
        });
    }

    // complete order delete
    const deleteHandle = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't  to delete this Work!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0d9488",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/api/v1/bookings/${_id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            setProvideServices(provideServices.filter(service=>service._id!==_id))
                            Swal.fire({
                                title: "Canceled!",
                                text: "Your Work has been delete.",
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
            <div className="max-w-screen-xl mx-auto px-6 my-10 grid grid-cols-1 lg:grid-cols-2  gap-4">
                <div className="lg:border-r-2  lg:border-teal-600 lg:pr-6">
                    <div className="bg-[url('https://i.ibb.co/bQ1JWBp/mp-our-services-mobile.png')]  relative bg-no-repeat bg-cover bg-top py-6 mb-8">
                        <div className="absolute h-full w-full top-0 z-0 left-0 bg-[#080808a8]"></div>
                        <div className="text-center relative z-20">
                            <h1 className="text-3xl mb-3 font-bold text-teal-500">My Bookings</h1>
                        </div>
                    </div>

                    <div className="md:px-14">
                        {
                            bookedServices?.map(service =><MyBookingsCard key={service._id} cancelHandle={cancelHandle} service={service}></MyBookingsCard>)
                        }
                    </div>

                </div>
                <div className="md:pl-3">
                    <div className="bg-[url('https://i.ibb.co/bQ1JWBp/mp-our-services-mobile.png')]  relative bg-no-repeat bg-cover bg-top py-6 mb-10">
                        <div className="absolute h-full w-full top-0 z-0 left-0 bg-[#080808a8]"></div>
                        <div className="text-center relative z-20">
                            <h1 className="text-3xl mb-3 font-bold text-teal-500">My Pending works</h1>
                        </div>
                    </div>
                    <div className="md:px-14">
                        {
                            provideServices?.map(service => <PandingServiceCard key={service._id} deleteHandle={deleteHandle} service={service}></PandingServiceCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySchedule;