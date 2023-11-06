import useAuthContext from "../../Hoocks/useAuthContext";
import axios from 'axios';
import toast from "react-hot-toast";

const ServicesModal = ({ service }) => {
    const {user}=useAuthContext()
    const {serviceName,serviceImage,providerName,email,price} = service
    const formHandle = (e) => {

        const form = e.target;
        const serviceName = form.serviceName.value;
        const serviceImage = form.serviceImage.value;
        const providerEmail = form.providerEmail.value;
        const userEmail = form.userEmail.value;
        const servicePrice = form.servicePrice.value;
        const takingDate = form.takingDate.value;
        const instruction = form.instruction.value;
        const provider_name = providerName
        const booking = {serviceName,serviceImage,providerEmail,userEmail,servicePrice,takingDate,instruction,provider_name}
        axios.post('http://localhost:5000/api/v1/bookings',booking)
        .then(data=>{    
            if (data.data.insertedId) {
                toast.success('Successfully Add Service!')
            }
        })
        .catch(error=>console.log(error.massage))
        
    }
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="px-3 py-[10px] text-white bg-teal-600 rounded-sm text-sm font-bold" onClick={() => document.getElementById('my_modal_1').showModal()}>Book Now</button>
            <dialog id="my_modal_1" className="modal ">
                <div className="modal-box h-screen bg-teal-100  w-full">
                    <div className="modal-action l">
                        <form method="dialog"  onSubmit={formHandle} >
                            
                            <div className="flex flex-col md:flex-row gap-5">
                                <div className=" w-full">
                                <label>
                                        Service Name
                                    </label>
                                    <input required className="w-full mt-1 px-4 py-2 drop-shadow-lg mb-4 rounded  " value={serviceName} readOnly type="text" name="serviceName" id="" />
                                </div>

                                <div className="w-full">
                                <label>
                                        Service image
                                    </label>
                                    <input required className="px-4 mt-1 w-full py-2 drop-shadow-lg rounded mb-4" value={serviceImage} readOnly type="url" name="serviceImage" id="" />

                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-5">
                                <div className=" w-full">
                                    <label>
                                        Provider Email
                                    </label>
                                    <input type="text" className="px-4 mt-1 w-full py-2 drop-shadow-lg rounded mb-4" name="providerEmail" value={email} readOnly id="" />
                                </div>

                                <div className="w-full">
                                    <label >
                                        Your Email
                                    </label>
                                    <input className="px-4 mt-1 w-full py-2 drop-shadow-lg rounded mb-4" type="email" name="userEmail" value={user?.email} id="" />
                                </div>
                            </div>

                            <div className="flex flex-col md:flex-row gap-5">
                                <div className=" w-full">
                                    <label>
                                        price
                                    </label>
                                    <input required className="w-full mt-1 px-4 py-2 drop-shadow-lg mb-4 rounded  " type="text" name="servicePrice" value={price} readOnly id="" />
                                </div>

                                <div className="w-full">
                                    <label >
                                        Taking Date
                                    </label>
                                    <input required className="px-4 mt-1 w-full py-2 drop-shadow-lg rounded mb-2" type="date" name="takingDate"  id="" />
                                </div>
                            </div>
                            <textarea  className=" my-3 drop-shadow-lg p-3 rounded w-full " name="instruction" placeholder="Enter Spatial instruction" id="" rows="5"></textarea>


                            <button type="submit" className="px-3 py-[10px] text-white w-full bg-teal-600 rounded-sm text-sm font-bold">Submit</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ServicesModal;